import Link from "next/link";
import React from "react";

const Button: React.FC = () => {
  return (
    <Link
      href={"/contact"}
      className="
        group
        p-5
        cursor-pointer
        relative
        text-xl
        font-normal
        border-0
        flex
        items-center
        justify-center
        bg-transparent
         text-second-400
         h-auto
         w-[170px]
         overflow-hidden
         transition-all
         duration-100"
    >
      <span
        className="
        group-hover:w-full
        absolute
        left-0
        h-full
        w-5
        border-y
        border-l
         border-second-400
           transition-all
         duration-500"
      ></span>

      <p
        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
      >
        Contact Me
      </p>

      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
        Thank you!
      </span>

      <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-second-400 transition-all duration-500"></span>
    </Link>
  );
};

export default Button;
