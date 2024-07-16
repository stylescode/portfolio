import About from '@/components/about';
import Connect from '@/components/connect';
import Projects from '@/components/projects';
import Descriptor from '@/components/descriptor';
import Tech from '@/components/tech';

import myprojects from '@/data/projects.json';

export default function Home() {

  const skills = ["css", "express", "git", "html", "javascript", "jest", "jquery", "mongodb", "mysql", "nginx", "nextjs", "nodejs", "npm", "postgresql", "postman", "prisma", "python", "react", "ruby", "supabase", "tailwindcss", "typescript", "vercel", "vite", "vscode"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex">
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Connect</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>STYLES KIM</h1>
        <Descriptor />
      </div>
      <About />
      <Tech technologies={skills} />
      <Projects projects={myprojects} />
      <Connect />
    </main>
  );
}
