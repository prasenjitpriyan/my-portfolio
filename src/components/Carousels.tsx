import React from "react";
import TextSlider from "./TextSlider";
import CertificateSlider from "./CertificateSlider";

const Carousels = () => {
  return (
    <section className="h-[130svh] parent4 ml-40 mr-40 mt-2 flex flex-col justify-evenly pt-5">
      <div className="div9 flex flex-row justify-center items-center">
        <h1 className="text-5xl font-light text-text-primary">Achievement</h1>
      </div>
      <div className="div10">
        <div>
          <h1 className="text-2xl">@constPrasenjit</h1>
          <span>
            <TextSlider />
          </span>
        </div>
      </div>
      <div className="div11">
        <CertificateSlider />
      </div>
      <div className="div12 flex flex-col justify-center items-center">
        <button className="border-2 border-text-primary p-2 rounded">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Carousels;
