import React from "react";
import Grid from "./Grid";

const About: React.FC = () => {
  return (
    <div className="relative h-[100svh] w-[100svw] bg-slate-900">
      <Grid />
      <div className="bg-slate-700 opacity-50 h-[90svh] w-[90svw] flex flex-col justify-center items-center leading-relaxed lg:leading-snug text-center mx-auto  absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full p-5">
          <div className="border-2 border-second-400 m-5 rounded-lg"></div>
          <div className="border-2 border-second-400 m-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
