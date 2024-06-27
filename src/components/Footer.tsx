import React from "react";
import Link from "next/link";
import LinkComponents from "./LinkComponents";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="h-[30svh] w-screen relative">
        <div className="bg-transparent h-full w-full absolute z-10">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-3 -my-3">
              <div className="px-3 py-2">
                <Link
                  href="/about"
                  className="leading-6 text-second-400 hover:text-second-500"
                >
                  About
                </Link>
              </div>
              <div className="px-3 py-2">
                <Link
                  href="/blog"
                  className="leading-6 text-second-400 hover:text-second-500"
                >
                  Blog
                </Link>
              </div>
              <div className="px-3 py-2">
                <Link
                  href="/works"
                  className="leading-6 text-second-400 hover:text-second-500"
                >
                  Works
                </Link>
              </div>
              <div className="px-3 py-2">
                <Link
                  href="/achievement"
                  className="leading-6 text-second-400 hover:text-second-500"
                >
                  Achievement
                </Link>
              </div>
              <div className="px-3 py-2">
                <Link
                  href="/contact"
                  className="leading-6 text-second-400 hover:text-second-500"
                >
                  Contact
                </Link>
              </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <LinkComponents className="text-second-400 hover:text-second-500" />
            </div>
            <p className="mt-8 text-base leading-6 text-center text-second-400">
              prasenjitpriyan@icloud.com
              <br />
              Copyright © {currentYear} - All right reserved by Prasenjit.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
