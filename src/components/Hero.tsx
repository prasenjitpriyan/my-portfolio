"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Grid from "./Grid";
import LinkComponents from "./LinkComponents";
import PageLinkComponent from "./PageLinkComponent";

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
      gsap.from(".link", {
        y: -100,
        duration: 0.5,
        delay: 0.5,
        scale: 2,
        stagger: 0.5,
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
      <div className="bg-transparent h-full w-full absolute z-10">
        <div className="bg-slate-600 h-[90svh] w-[90svw] flex flex-col justify-center items-center leading-relaxed lg:leading-snug text-center mx-auto  absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2 rounded-xl">
          <div className="grid grid-cols-1 relative w-full h-full p-5">
            <div className="m-2 flex flex-col justify-between">
              <div className="flex justify-center lg:justify-end items-center gap-5">
                <PageLinkComponent className="link hover:border-b-2" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl sm:2xl md:text-3xl xl:text-4xl font-semibold from-second-400 via-second-600 to-second-400 bg-gradient-to-r bg-clip-text text-transparent">
                  Innovative Solutions with JavaScript
                </h1>
                <h3 className="sub-one text-base sm:text-lg md:text-xl xl:text-3xl text-first-200">
                  Welcome! I&apos;m Prasenjit Das
                </h3>
                <h3 className="sub-two text-base sm:text-lg md:text-xl xl:text-3xl text-first-200">
                  A JavaScript engineer
                </h3>
                <p className="text-wrap text-sm md:text-md pt-5 text-first-100">
                  Passionate about crafting cutting-edge web applications using
                  the latest technologies.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-green-400">
                  Let&apos;s build something amazing together.
                </p>
              </div>
              <div className="relative">
                <div className="absolute border-l-2 p-2 left-0 bottom-0 flex flex-row xl:flex-col gap-2">
                  <LinkComponents />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
