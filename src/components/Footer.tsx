import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OuterLinks } from "./Navbar";

let navLinks: Array<string> = ["works", "contact"];

let outerLinks: OuterLinks[] = [
  { id: Math.random(), href: "/linkedin", src: "/linkedin.svg" },
  { id: Math.random(), href: "/linkedin", src: "/github.svg" },
  { id: Math.random(), href: "/linkedin", src: "/stackoverflow.svg" },
  { id: Math.random(), href: "/linkedin", src: "/dribbble.svg" },
];

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex flex-row justify-start gap-4">
          {navLinks.map((link, array) => (
            <li key={array}>
              <Link className="text-lg" href={`/${link}`}>
                {link.charAt(0).toUpperCase() + link.substring(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {outerLinks.map((outerLink) => (
            <Link key={outerLink.id} href={outerLink.href}>
              <Image
                className="w-6"
                src={outerLink.src}
                alt="Linkedin"
                width="1000"
                height="1000"
              />
            </Link>
          ))}
        </div>
      </nav>
      <aside>
        <p>prasenjitpriyan@icloud.com</p>
        <p>Copyright © 2024 - All right reserved by Prasenjit.</p>
      </aside>
    </footer>
  );
};

export default Footer;
