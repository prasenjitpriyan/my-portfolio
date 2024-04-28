import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectsLinks {
  id: number;
  href: string;
  src: string;
  alt: string;
  text: string;
}

let projectsLink: ProjectsLinks[] = [
  {
    id: Math.random(),
    href: "/",
    src: "/weather.svg",
    alt: "weather",
    text: "Weather",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/tic-tac-toe.svg",
    alt: "tic-tac-toe",
    text: "Tic-Tac-Toe",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/netflix.svg",
    alt: "netflix",
    text: "Netflix",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/real-state.svg",
    alt: "real-state",
    text: "Real State",
  },
  { id: Math.random(), href: "/", src: "/blog.svg", alt: "blog", text: "Blog" },
  {
    id: Math.random(),
    href: "/",
    src: "/book.svg",
    alt: "book",
    text: "Book List",
  },
  {
    id: Math.random(),
    href: "/",
    src: "/unsplash.svg",
    alt: "unsplash",
    text: "Unsplash",
  },
  { id: Math.random(), href: "/", src: "/ai.svg", alt: "ai", text: "AI" },
];

const Projects = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-[100px]">
      {projectsLink.map((project) => (
        <div
          key={project.id}
          className="flex flex-col justify-around items-center"
        >
          <Link href={project.href}>
            <Image
              src={project.src}
              alt={project.alt}
              height="1000"
              width="1000"
              className="w-[40px]"
            />
          </Link>
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
