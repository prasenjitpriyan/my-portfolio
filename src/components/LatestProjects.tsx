import React from "react";
import Slider from "./Slider";

const LatestProjects = () => {
  return (
    <section className="h-[100svh] parent3 ml-40 mr-40 mt-2 flex flex-col justify-evenly">
      <div className="div7 flex flex-row justify-center items-center">
        <h1 className="text-5xl font-light text-text-primary">
          My Latest Projects
        </h1>
      </div>
      <div className="div8 flex flex-row justify-between gap-5">
        <Slider />
      </div>
    </section>
  );
};

export default LatestProjects;
