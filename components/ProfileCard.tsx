'use client';

import { DynaPuff } from "next/font/google";
import Image from 'next/image';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCircle } from '@mdi/js';

import Typewriter from '@/utils/typewriter';

const dynaPuff = DynaPuff({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dynapuff",
});


const ProfileCard = ({}) => {

  const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast",
    "Problem Solver",
    "Boba Lover",
    "Board Game Fanatic",
  ]

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg w-1/2 items-center mt-32 mb-32 pb-8 shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-blue-200">
      <div className="flex bg-gray-200 border border-b-gray-300 py-3 px-4 gap-2 w-full rounded-t-lg">
        <Icon path={mdiCircle} size={0.6} className="text-red-500"/>
        <Icon path={mdiCircle} size={0.6} className="text-yellow-400"/>
        <Icon path={mdiCircle} size={0.6} className="text-green-500"/>
      </div>
      <section className="flex mt-8 mb-8 w-3/4 justify-evenly">
        <Image
          src="https://avatars.githubusercontent.com/u/139181994?v=4"
          alt="Profile Picture"
          className="rounded-full w-1/3"
          width={200}
          height={200}
        />
        <div className="border border-green-300 flex flex-col items-center justify-center w-2/3">
          <h2 className={`text-blue-700 text-6xl ${dynaPuff.className} font-medium tracking-wide  my-6`}>Styles Kim</h2>
          <h3 className="text-center py-2 text-xl text-gray-500 w-full">
            $ echo
            <span className="pl-4">
              <Typewriter
                phrases={titles} />
            </span>
            <span className="animate-blink text-blue-600"> |</span>
          </h3>
        </div>
      </section>
      <p className="border border-gray-300 py-2 px-2 rounded-lg text-center w-4/5">Welcome to my corner of the web! I&#39;m Styles, a full-stack developer committed to crafting user-friendly & innovative apps through meticulous problem solving and creative thinking. I thrive on the endless well of knowledge this world provides with a strong dedication toward continuous learning. I aim to deliver impactful, high-quality results in dynamic and collaborative work spaces with a keen awareness of the evolving tech landscape, sturdy foundational skills, and an understanding of the pivotal role communication has in achieving success.
      </p>
    </div>
  );
}

export default ProfileCard;