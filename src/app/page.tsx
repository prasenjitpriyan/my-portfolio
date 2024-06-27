import React from "react";
import Hero from "@/components/Hero";
import Text from "@/components/Text";
import Advantage from "@/components/Advantage";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main className="min-h-[100svh] overflow-x-hidden">
      <div className="bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900 relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <Hero />
        <Text title="About Me" />
        <About />
        <Text title="My Advantage" />
        <Advantage />
        <Text title="Footer" />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
