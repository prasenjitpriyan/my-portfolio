"use client"
import React from "react";
import Link from 'next/link'

const NavbarMain = () => {

  return (
    <header className="grid grid-cols-12 gap-4 ml-40 mr-40 mt-2">
      <nav className="col-span-3 flex flex-row justify-start gap-4 mt-4">
        <Link className="text-lg" href="works">Works</Link>
        <Link className="text-lg" href="contact">Contact</Link>
      </nav>
      <div className="col-span-6 flex justify-center">
        <Link href="/">
          <img className="w-72" src='/logo.png' alt="My Logo" />
        </Link>
      </div>
      <div className="col-span-3 flex flex-row justify-end gap-4 mt-4">
        <Link href="/">
          <img className="w-6" src="/linkedin.svg" alt="Linkedin" />
        </Link>
        <Link href="/">
          <img className="w-6" src="/github.svg" alt="Github" />
        </Link>
        <Link href="/">
          <img className="w-6" src="/stackoverflow.svg" alt="Stack Overflow" />
        </Link>
        <Link href="/">
          <img className="w-6" src="dribbble.svg" alt="Dribble" />
        </Link>
      </div>
    </header>
  )
}

export default NavbarMain