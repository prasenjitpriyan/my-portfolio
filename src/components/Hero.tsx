"use client";

import React, { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.from("h1", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      scale: 2,
    });
    gsap.from("h3", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      scale: 1,
    });
    gsap.from("h4", {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      scale: 1,
    });
  });

  return (
    <section className="relative h-[100svh] w-[100svw] bg-gradient-to-b from-first-100 via-first-200 to-first-300">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="flex flex-col justify-center items-center max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-first-900 @apply absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2">
        <div className="h-20">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
            Innovative Solutions with JavaScript
          </h1>
        </div>
        <h3 className="text-xl md:text-2xl">Welcome! I&apos;m Prasenjit Das</h3>
        <h4 className="text-xl md:text-2xl">A JavaScript engineer</h4>
        <p className="text-wrap pt-5">
          Passionate about crafting cutting-edge web applications using the
          latest technologies.
        </p>
        <p className="text-green-600">
          Let&apos;s build something amazing together.
        </p>
      </div>
    </section>
  );
};

export default Hero;
