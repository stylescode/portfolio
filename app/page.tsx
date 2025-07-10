import About from '@/components/About';
import Connect from '@/components/connect';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

import ProfileCard from '@/components/ProfileCard';
import Technologies from '@/components/Technologies';


import myprojects from '@/data/projects.json';

import { RiArrowDownWideFill } from "react-icons/ri";

export default function Home() {

  return (
    <main className="flex flex-col bg-white border border-black min-h-screen min-w-screen items-center px-12">
      <Header />
      <ProfileCard />
      <div className="text-blue-700 font-bold mb-8 text-4xl"> skills </div>
      <Technologies />
      <div className="text-blue-700 font-bold mb-8 text-4xl"> projects </div>
      <Projects projects={myprojects} />
      <div className="text-blue-700 font-bold mb-8 text-4xl"> about me </div>
      <About />
      <div className="text-blue-700 font-bold mb-8 text-4xl"> connect </div>
      <Connect />
    </main>
  );
}
