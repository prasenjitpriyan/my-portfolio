import React from "react";
import NotFoundSvg from "@/components/NotFoundSvg";
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-slate-900 bg-[linear-gradient(to_right,#00adb52e_1px,transparent_1px),linear-gradient(to_bottom,#00adb52e_1px,transparent_1px)] bg-[size:14px_20px] border-b-8 border-second-400">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-second-400">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-second-400 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-second-900 my-12">
          Sorry, the page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="flex items-center space-x-2 px-4 py-2 rounded transition duration-150 bg-gradient-to-br  from-second-300 via-second-500 to-second-700 text-second-50 border-second-200 hover:bg-gradient-to-tl hover:from-second-300 hover:via-second-500 hover:to-second-700"
          title="Return Home"
        >
          <IoMdArrowRoundBack className="h-5 w-5" />
          <span>Return Home</span>
        </a>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <NotFoundSvg />
      </div>
    </div>
  );
};

export default NotFoundPage;
