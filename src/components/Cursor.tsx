"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor: React.FC = () => {
  useGSAP(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  });

  return (
    <React.Fragment>
      <div className="ball bg-second-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-second-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-second-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-second-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-second-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
    </React.Fragment>
  );
};

export default Cursor;
