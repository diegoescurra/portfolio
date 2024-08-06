import { GithubIcon, LinkedinIcon } from "../Icons";
import OrbitingCirclesDemo from "./OrbitingCirclesDemo";

export const Hero = () => {
  return (
    <section className="relative flex flex-col" id="inicio">
      <div className="absolute inset-0 -top-16 -z-10 lg:-top-28">
        <div className="luz relative">
          <div className="absolute inset-x-0 top-28 md:top-80 max-w-[1280px] lg:bottom-auto lg:left-auto lg:right-0 lg:w-[80%] ">
            <OrbitingCirclesDemo />
            <div className="absolute -inset-px bg-gray-900/50"></div>
            <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
            <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-gray-900 lg:block"></div>
          </div>
          <div className="relative flex justify-center overflow-hidden">
            <img
              alt=""
              fetchPriority="high"
              width="640"
              height="1124"
              decoding="async"
              data-nimg="1"
              className="sm:hidden"
              style={{ color: "transparent" }}
              src="https://buildui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglow-homepage-mobile.61dc5f81.png&w=1920&q=75"
            />
            <img
              alt=""
              fetchpriority="high"
              width="1024"
              height="1124"
              decoding="async"
              data-nimg="1"
              className="hidden sm:block lg:hidden"
              style={{ color: "transparent" }}
              src="https://buildui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglow-homepage-tablet.bfb22167.png&w=2048&q=75"
            />
            <img
              alt=""
              fetchpriority="high"
              width="2510"
              height="1168"
              decoding="async"
              data-nimg="1"
              className="hidden max-w-none lg:block"
              style={{ color: "transparent" }}
              src="https://buildui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglow-homepage.46f045ac.png&w=3840&q=75"
            />
          </div>
        </div>
      </div>
      <div className="mb-12 mt-56 border-white/[.03] md:mt-28 lg:my-[13rem] lg:border-y lg:py-2">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]">
            Diego Escurra
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[49px] lg:leading-[1.125em]">
            Desarrollador de software
          </h2>
          <div className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
            <p>
              Ingeniero Informático enfocado en el desarrollo de software Full
              Stack, utilizando tecnologías como Node.js (Express), Java
              (Spring), PostgreSQL y MySQL para el backend y React con Tailwind
              para el frontend.
            </p>
            <div className="flex gap-4 w-full h-14 ">
              <a
                className="h-10 w-10"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/diego-escurra-6978651ba/"
              >
                <LinkedinIcon />
              </a>
              <a
                className="h-10 w-10"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Sie7he"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
