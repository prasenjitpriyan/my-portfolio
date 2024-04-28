import Image from "next/image";
import React from "react";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className="h-[120svh] parent ml-40 mr-40 mt-2">
        <div className="div1 flex flex-col items-center text-5xl font-light text-text-primary pt-10">
          <h2>Prasenjit Das</h2>
          <h2>MERN Stack Web Developer</h2>
          <h2>Based in India</h2>
        </div>
        <div className="div2 flex flex-col justify-between gap-2">
          <div className="flex flex-col justify-between gap-5">
            <h5 className="text-text-secondary">BIOGRAPHY</h5>
            <p className="text-xl font-semibold">
              Work for money and code for passion! <br /> I'm Prasenjit, <br />
              a MERN Stack Web Developer, <br /> based in India
            </p>
          </div>
          <div className="flex flex-col justify-between gap-5">
            <h5 className="text-text-secondary">CONTACT</h5>
            <p className="text-xl font-semibold">
              Haltu, 57, P. Majumder Road, Kolkata, <br /> West Bengal, India,
              Pin-700078 <br />
              prasenjitpriyan@gmail.com <br /> +91 90383 32076
            </p>
          </div>
          <div className="flex flex-col justify-between gap-5">
            <h5 className="text-text-secondary">SERVICES</h5>
            <p className="text-xl font-semibold">
              Responsive Website Design <br /> Produce functionality to the Web
              Page <br />
              Create API
            </p>
          </div>
        </div>
        <div className="div3 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center border-2 border-text-primary rounded-full w-[420px] h-[500px]">
            <div className="w-[90%] h-[90%] flex justify-center items-center]">
              <Image
                src="/My.png"
                alt="my"
                width="1000"
                height="1000"
                className="object-cover object-center w[100%] h-[100%] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="div4 flex flex-col justify-between items-end gap-2">
          <div className="flex flex-col justify-between gap-5 text-right">
            <div className="flex flex-col justify-start gap-0">
              <h5 className="text-text-secondary">YEARS OF</h5>
              <h5 className="text-text-secondary">EXPERIENCE</h5>
            </div>
            <h1 className="text-5xl font-light">2</h1>
          </div>
          <div className="flex flex-col justify-between gap-5 text-right">
            <div className="flex flex-col justify-start gap-0">
              <h5 className="text-text-secondary">SATISFITATION</h5>
              <h5 className="text-text-secondary">CLIENTS</h5>
            </div>
            <h1 className="text-5xl font-light">100%</h1>
          </div>
          <div className="flex flex-col justify-between gap-5 text-right">
            <div className="flex flex-col justify-start gap-0">
              <h5 className="text-text-secondary">PROJECTS DONE</h5>
            </div>
            <div>
              <h1 className="text-5xl font-light">81</h1>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 text-right">
            <h5 className="text-text-secondary">CLIENTS ON WORLDWIDE</h5>
            <div>
              <h1 className="text-5xl font-light">+ 54</h1>
            </div>
          </div>
        </div>
        <div className="div5 flex flex-col justify-between">
          <Projects />
        </div>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
