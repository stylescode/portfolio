'use client';
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dynapuff",
});

import Image from 'next/image';
import { useState } from 'react';

import Icon from '@mdi/react';
import { mdiCircle } from '@mdi/js';


const ProfileCard = ({}) => {

  const titles = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast",
    "Problem Solver",
    "Boba Lover",
    "Board Game Fanatic",
  ]

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  const changeTitle = () => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    setCurrentTitle(titles[randomIndex]);
  }

  setTimeout(changeTitle, 4000);

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg w-1/2 items-center mt-32 mb-32 pb-8 shadow-xl">
      <div className="flex bg-gray-200 border border-b-gray-300 py-3 px-4 gap-2 w-full rounded-t-lg">
        <Icon path={mdiCircle} size={0.6} className="text-red-500"/>
        <Icon path={mdiCircle} size={0.6} className="text-yellow-400"/>
        <Icon path={mdiCircle} size={0.6} className="text-green-500"/>
      </div>
      <section className="flex mt-8 mb-8 w-3/4 justify-evenly">
        <Image
          src="https://avatars.githubusercontent.com/u/139181994?v=4"
          alt="Profile Picture"
          className="rounded-full w-42 h-42"
          width={200}
          height={200}
        />
        <div className=" flex flex-col items-center justify-center">
          <h2 className={`font-sans text-6xl ${dynaPuff.className} font-medium tracking-wide`}>Styles Kim</h2>
          <h3 className="mt-4 text-2xl">{currentTitle}</h3>
        </div>
      </section>
      <p className="border border-gray-300 py-2 px-2 rounded-lg text-center w-4/5">Welcome to my corner of the web! I&#39;m Styles, a full-stack developer committed to crafting user-friendly & innovative apps through meticulous problem solving and creative thinking. I thrive on the endless well of knowledge this world provides with a strong dedication toward continuous learning. I aim to deliver impactful, high-quality results in dynamic and collaborative work spaces with a keen awareness of the evolving tech landscape, sturdy foundational skills, and an understanding of the pivotal role communication has in achieving success.
      </p>
    </div>
  );
}

export default ProfileCard;