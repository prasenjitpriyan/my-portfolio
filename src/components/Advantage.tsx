import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Advantages {
  id: number;
  href: string;
  src: string;
  alt: string;
  text: string;
}

let advantages: Advantages[] = [
  { id: Math.random(), href: "/", src: "/html.svg", alt: "html", text: "HTML" },
  { id: Math.random(), href: "/", src: "/css.svg", alt: "css", text: "CSS" },
  {
    id: Math.random(),
    href: "/",
    src: "/javascript.svg",
    alt: "javascript",
    text: "JavaScript",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/typescript.svg",
    alt: "typescript",
    text: "TypeScript",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/bootstrap.svg",
    alt: "bootstrap",
    text: "Bootstrap",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/tailwind.svg",
    alt: "tailwind",
    text: "Tailwind",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/mongodb.svg",
    alt: "mongodb",
    text: "MongoDB",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/express.svg",
    alt: "express",
    text: "Express",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/react.svg",
    alt: "react",
    text: "React",
  },
  { id: Math.random(), href: "/", src: "/node.svg", alt: "node", text: "Node" },
];

const Advantage = () => {
  return (
    <section className="h-[50svh] parent3 ml-40 mr-40 mt-2 flex flex-col justify-evenly">
      <div className="div7 flex flex-row justify-center items-center">
        <h1 className="text-5xl font-light text-text-primary">My Advantage</h1>
      </div>
      <div className="div8 flex flex-row justify-between gap-5">
        {advantages.map((advantage) => (
          <div
            className="flex flex-col justify-between items-center gap-5"
            key={advantage.id}
          >
            <div className="w-[80px] h-[80px] bg-bg-secondary flex justify-center items-center rounded-full border-2 border-text-primary">
              <Link href={advantage.href}>
                <Image
                  src={advantage.src}
                  alt={advantage.alt}
                  width="1000"
                  height="1000"
                  className="w-[40px]"
                />
              </Link>
            </div>
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantage;
