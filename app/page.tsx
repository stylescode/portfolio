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
      <div> Projects </div>
      <Projects projects={myprojects} />
      <div> Skills </div>
      <Technologies />
      <div> About me </div>
      <About />
      <div> Connect </div>
      <Connect />
    </main>
  );
}
