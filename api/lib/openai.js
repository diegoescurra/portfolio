import OpenAI from "openai";

let openai;

export function getOpenAIClient() {
  if (openai) return openai;

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return openai;
}
