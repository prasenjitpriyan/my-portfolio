import React from "react";
import Grid from "./Grid";

const About: React.FC = () => {
  return (
    <div className="relative h-[100svh] w-[100svw] bg-slate-900">
      <Grid />
      <div className="bg-slate-700 h-[90svh] w-[90svw] flex flex-col justify-center items-center leading-relaxed lg:leading-snug text-center mx-auto  absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2 rounded-xl">
        <div className="text-white ">About Page</div>
      </div>
    </div>
  );
};

export default About;
