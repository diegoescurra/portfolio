import { createHmac } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const MINUTE_LIMIT = 7;
const DAILY_LIMIT = 40;

let limiters;

function getClientIp(req) {
  // Vercel sets these headers at the edge. Prefer its header before the generic proxy header.
  const forwarded = req.headers["x-vercel-forwarded-for"] || req.headers["x-forwarded-for"];

  if (Array.isArray(forwarded)) return forwarded[0];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();

  return req.socket?.remoteAddress || req.connection?.remoteAddress || "unknown";
}

function getIdentifier(req) {
  const salt = process.env.RATE_LIMIT_SALT;

  if (!salt) {
    throw new Error("RATE_LIMIT_SALT is not configured.");
  }

  // Redis only receives an irreversible identifier, never the visitor's raw IP address.
  return createHmac("sha256", salt).update(getClientIp(req)).digest("hex");
}

function getLimiters() {
  if (limiters) return limiters;

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash Redis environment variables are not configured.");
  }

  const redis = Redis.fromEnv();

  limiters = {
    // A sliding window prevents bursts around fixed window boundaries.
    perMinute: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(MINUTE_LIMIT, "1 m"),
      prefix: "portafolio:chat:minute",
    }),
    perDay: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(DAILY_LIMIT, "24 h"),
      prefix: "portafolio:chat:day",
    }),
  };

  return limiters;
}

function normalizeResult(result, limit) {
  return {
    success: result.success,
    limit,
    remaining: Math.max(0, result.remaining),
    reset: result.reset,
  };
}

export async function checkChatRateLimit(req) {
  const identifier = getIdentifier(req);
  const { perMinute, perDay } = getLimiters();

  const minute = normalizeResult(await perMinute.limit(identifier), MINUTE_LIMIT);

  // Do not consume the daily allowance when the request was already blocked by the burst limit.
  if (!minute.success) {
    return { success: false, blockedBy: "minute", minute, daily: null };
  }

  const daily = normalizeResult(await perDay.limit(identifier), DAILY_LIMIT);

  if (!daily.success) {
    return { success: false, blockedBy: "daily", minute, daily };
  }

  return { success: true, minute, daily };
}

export function applyRateLimitHeaders(res, result) {
  const primary = result.blockedBy === "daily" ? result.daily : result.minute;

  res.setHeader("RateLimit-Limit", primary.limit);
  res.setHeader("RateLimit-Remaining", primary.remaining);
  res.setHeader("RateLimit-Reset", Math.max(0, Math.ceil((primary.reset - Date.now()) / 1000)));
  res.setHeader("X-RateLimit-Daily-Limit", DAILY_LIMIT);
  res.setHeader("X-RateLimit-Daily-Remaining", result.daily?.remaining ?? DAILY_LIMIT);

  if (!result.success) {
    res.setHeader("Retry-After", Math.max(1, Math.ceil((primary.reset - Date.now()) / 1000)));
  }
}
