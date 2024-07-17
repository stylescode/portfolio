import About from '@/components/about';
import Connect from '@/components/connect';
import Projects from '@/components/projects';
import Descriptor from '@/components/descriptor';
import Tech from '@/components/tech';

import myprojects from '@/data/projects.json';

import { RiArrowDownWideFill } from "react-icons/ri";

export default function Home() {

  const skills = ["css", "express", "git", "html", "javascript", "jest", "jquery", "mongodb", "mysql", "nginx", "nextjs", "nodejs", "npm", "postgresql", "postman", "prisma", "python", "react", "ruby", "supabase", "tailwindcss", "typescript", "vercel", "vite", "vscode"];

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center bg-black text-white">
      <section className="w-full flex flex-col h-screen justify-between">
        <header className="w-full flex justify-between px-[80px] py-[20px]">
          <div>
            Styles Kim
          </div>
          <nav className="flex w-[500px] justify-between">
            <p className="hover:cursor-pointer hover:scale-125 hover:font-bold duration-300">
              About
            </p>
            <p className="hover:cursor-pointer hover:scale-125 hover:font-bold duration-300">
              Skills
            </p>
            <p className="hover:cursor-pointer hover:scale-125 hover:font-bold duration-300">
              Projects
            </p>
            <p className="hover:cursor-pointer hover:scale-125 hover:font-bold duration-300">
              Connect
            </p>
          </nav>
        </header>
        <div className="flex flex-col items-center">
          <h1 className="text-[70px]">
            Styles Kim
          </h1>
          <Descriptor />
        </div>
        <div className="self-center">
          <RiArrowDownWideFill className="w-[70px] h-[70px] animate-bounce"/>
        </div>
      </section>
      <About />
      <Tech technologies={skills} />
      <Projects projects={myprojects} />
      <Connect />
    </main>
  );
}
