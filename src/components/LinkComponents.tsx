import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const LinkComponents: React.FC = () => {
  return (
    <React.Fragment>
      <Link
        href="https://www.linkedin.com/in/prasenjitdass"
        target="_blank"
        className="text-second-400 hover:text-second-500 "
      >
        <span className="sr-only">Linkedin</span>
        <FaLinkedin className="w-4 h-4" />
      </Link>
      <Link
        href="https://github.com/prasenjitpriyan"
        target="_blank"
        className="text-second-400 hover:text-second-500"
      >
        <span className="sr-only">Github</span>
        <FaGithub className="w-4 h-4" />
      </Link>
      <Link
        href="https://x.com/constprasenjit"
        target="_blank"
        className="text-second-400 hover:text-second-500"
      >
        <span className="sr-only">Twitter</span>
        <FaTwitter className="w-4 h-4" />
      </Link>
      <Link
        href="https://stackoverflow.com/users/21798146/prasenjitpriyan"
        target="_blank"
        className="text-second-400 hover:text-second-500"
      >
        <span className="sr-only">Stack Overflow</span>
        <FaStackOverflow className="w-4 h-4" />
      </Link>
      <Link
        href="https://dribbble.com/PD420"
        target="_blank"
        className="text-second-400 hover:text-second-500"
      >
        <span className="sr-only">Dribbble</span>
        <FaDribbble className="w-4 h-4" />
      </Link>
    </React.Fragment>
  );
};

export default LinkComponents;
