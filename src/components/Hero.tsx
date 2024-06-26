"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LinkComponents from "./LinkComponents";
import PageLinkComponent from "./PageLinkComponent";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Button from "./Button";

const Hero: React.FC = () => {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "build",
    },
    {
      text: "something",
    },
    {
      text: "amazing",
    },
    {
      text: "together.",
      className: "text-sm sm:text-2xl text-green-400",
    },
  ];
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
      gsap.from(".link2", {
        y: -1000,
        duration: 0.5,
        delay: 0.5,
        scale: 2,
        stagger: 0.3,
      });
    },
    { scope: heading }
  );

  return (
    <section className="relative h-[100svh] w-[100svw]" ref={heading}>
      <div className="w-full h-full flex flex-col justify-center items-center leading-relaxed lg:leading-snug text-center mx-auto  absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2">
        <div className="grid grid-cols-1 relative w-full h-full p-5">
          <div className="m-2 flex flex-col justify-between">
            <div className="flex justify-between items-center gap-5">
              <div className="text-second-400 border-t-2 border-l-2 p-2">
                <h1>PD</h1>
              </div>
              <PageLinkComponent className="link hover:border-b-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold uppercase from-second-400 via-second-500 to-second-400 bg-gradient-to-r bg-clip-text text-transparent">
                Innovative Solutions with JavaScript
              </h1>
              <h3 className="sub-one text-sm sm:text-xl md:text-2xl lg:text-4xl text-first-200">
                Welcome!{" "}
                <span className="text-green-400">I&apos;m Prasenjit Das</span>
              </h3>
              <h3 className="sub-two text-sm sm:text-xl md:text-2xl lg:text-4xl text-first-200 flex gap-2 items-center justify-center">
                A<span className="text-[#F0DB4F]">JavaScript</span>
                engineer
              </h3>
              <p className="text-wrap text-xs sm:text-lg md:text-xl pt-5 text-first-100">
                Passionate about crafting cutting-edge web applications using
                the latest technologies.
              </p>
              <div className="flex flex-col items-center justify-center">
                <TypewriterEffectSmooth words={words} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute border-l-2 border-b-2 p-2 left-0 bottom-0 flex flex-row xl:flex-col gap-2">
                <LinkComponents className="link2 text-second-400 hover:text-second-500" />
              </div>
              <div className="absolute right-0 bottom-0">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
