import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface OuterLinks {
  id: number;
  href: string;
  src: string;
}

let navLinks: Array<string> = ["works", "contact"];
let outerLinks: OuterLinks[] = [
  { id: Math.random(), href: "/linkedin", src: "/linkedin.svg" },
  { id: Math.random(), href: "/linkedin", src: "/github.svg" },
  { id: Math.random(), href: "/linkedin", src: "/stackoverflow.svg" },
  { id: Math.random(), href: "/linkedin", src: "/dribbble.svg" },
];

const NavbarMain = () => {
  return (
    <header className="grid grid-cols-12 gap-4 ml-40 mr-40 mt-2">
      <ul className="col-span-3 flex flex-row justify-start gap-4 mt-4">
        {navLinks.map((link, array) => (
          <li key={array}>
            <Link className="text-lg" href={`/${link}`}>
              {link.charAt(0).toUpperCase() + link.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="col-span-6 flex justify-center">
        <Link href="/">
          <Image
            className="w-72"
            src="/logo.png"
            alt="My Logo"
            width="1000"
            height="1000"
          />
        </Link>
      </div>
      <div className="col-span-3 flex flex-row justify-end gap-4 mt-4">
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
    </header>
  );
};

export default NavbarMain;
