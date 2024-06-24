"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Grid from "./Grid";

const Hero: React.FC = () => {
  const heading = useRef<HTMLInputElement | null>(null);

  useGSAP(
    () => {
      gsap.from("h1", {
        y: 80,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        scale: 2,
      });
      gsap.from(".sub-one", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        scale: 1,
      });
      gsap.from(".sub-two", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        scale: 1,
      });
    },
    { scope: heading }
  );

  return (
    <section
      className="relative h-[100svh] w-[100svw] bg-slate-900"
      ref={heading}
    >
      <Grid />
      <div className="flex flex-col justify-center items-center max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto  @apply absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2">
        <div className="h-20">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold from-second-400 via-second-500 to-second-400 bg-gradient-to-r bg-clip-text text-transparent">
            Innovative Solutions with JavaScript
          </h1>
        </div>
        <h3 className="sub-one text-xl md:text-2xl text-first-200">
          Welcome! I&apos;m Prasenjit Das
        </h3>
        <h3 className="sub-two text-xl md:text-2xl text-first-200">
          A JavaScript engineer
        </h3>
        <p className="text-wrap text-sm md:text-md pt-5 text-first-100">
          Passionate about crafting cutting-edge web applications using the
          latest technologies.
        </p>
        <p className="text-md md:text-xl text-green-400">
          Let&apos;s build something amazing together.
        </p>
      </div>
    </section>
  );
};

export default Hero;
