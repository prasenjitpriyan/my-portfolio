import React from "react";

const About: React.FC = () => {
  return (
    <div className="relative h-[100svh] w-[100svw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full p-5">
        <div className="border-2 border-second-400 m-5 rounded-lg"></div>
        <div className="border-2 border-second-400 m-5 rounded-lg"></div>
      </div>
    </div>
  );
};

export default About;
