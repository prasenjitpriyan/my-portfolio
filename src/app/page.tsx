import React from "react";
import Hero from "@/components/Hero";
import Text from "@/components/Text";
import Advantage from "@/components/Advantage";
import About from "@/components/About";
import Cursor from "@/components/Cursor";

const Home: React.FC = () => {
  return (
    <main className="min-h-[100svh] overflow-x-hidden">
      <Hero />
      <Text title="About Me" />
      <About />
      <Text title="My Advantage" />
      <Advantage />
      <Cursor />
      <Text title="Footer" />
      <div className="h-[30svh] w-screen bg-transparent absolute z-10"></div>
    </main>
  );
};

export default Home;
