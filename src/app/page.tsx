import React from "react";
import Hero from "@/components/Hero";
import Text from "@/components/Text";
import Advantage from "@/components/Advantage";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Text title="My Advantage" />
      <Advantage />
      <Text title="Footer" />
    </main>
  );
};

export default Home;
