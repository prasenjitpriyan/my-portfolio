import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="h-[30svh] w-screen bg-slate-900 bg-[linear-gradient(to_right,#00adb52e_1px,transparent_1px),linear-gradient(to_bottom,#00adb52e_1px,transparent_1px)] bg-[size:14px_20px] relative">
        <div className="bg-transparent h-full w-full absolute z-10">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-3 -my-2">
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
              <Link
                href="https://www.linkedin.com/in/prasenjitdass"
                target="_blank"
                className="text-second-400 hover:text-second-500"
              >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/prasenjitpriyan"
                target="_blank"
                className="text-second-400 hover:text-second-500"
              >
                <span className="sr-only">Github</span>
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/constprasenjit"
                target="_blank"
                className="text-second-400 hover:text-second-500"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://stackoverflow.com/users/21798146/prasenjitpriyan"
                target="_blank"
                className="text-second-400 hover:text-second-500"
              >
                <span className="sr-only">Stack Overflow</span>
                <FaStackOverflow className="w-6 h-6" />
              </Link>
              <Link
                href="https://dribbble.com/PD420"
                target="_blank"
                className="text-second-400 hover:text-second-500"
              >
                <span className="sr-only">Dribbble</span>
                <FaDribbble className="w-6 h-6" />
              </Link>
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
