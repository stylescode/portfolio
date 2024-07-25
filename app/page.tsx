import About from '@/components/about';
import Connect from '@/components/connect';
import Descriptor from '@/components/descriptor';
import Header from '@/components/header';
import Projects from '@/components/projects';
import Tech from '@/components/tech';

import myprojects from '@/data/projects.json';

import { RiArrowDownWideFill } from "react-icons/ri";

export default function Home() {

  return (
    <main className="flex flex-col items-center bg-black text-white min-w-screen ">
      <section className="flex flex-col min-h-screen justify-between">
        <Header />
        <div className="flex flex-col items-center w-full">
          <h1 className="text-7xl">
            Styles Kim
          </h1>
          <Descriptor />
        </div>
        <div className="self-center">
          <RiArrowDownWideFill className="w-[70px] h-[70px] animate-bounce"/>
        </div>
      </section>
      <div className="w-screen h-screen">
        <About />
      </div>
      <Tech />
      <Projects projects={myprojects} />
      <Connect />
    </main>
  );
}
