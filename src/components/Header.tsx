"use client";

import React, { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export const Header: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-3" />
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  useGSAP(() => {
    gsap.from(".link", {
      y: -70,
      duration: 0.5,
      delay: 0.5,
      scale: 2,
      stagger: 0.5,
    });
  });

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="container">
        <Menu setActive={setActive}>
          <Link href={"/"} className="link">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href={"/works"} className="link">
            <MenuItem setActive={setActive} active={active} item="Works" />
          </Link>
          <Link href={"/contact"} className="link">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}
