"use client";

import React from "react";
import Hero from "@/components/Hero";
import Text from "@/components/Text";
import Advantage from "@/components/Advantage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home: React.FC = () => {
  useGSAP(() => {});

  return (
    <main className="min-h-[100svh] overflow-x-hidden">
      <Hero />
      <Text title="My Advantage" />
      <Advantage />
      <Text title="Footer" />
      <div className="h-[30svh] w-screen bg-transparent absolute z-10"></div>
    </main>
  );
};

export default Home;
