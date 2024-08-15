import Image from 'next/image';
import IconSlider from './IconSlider';

const Tech = ({}) => {

  const skills = [
    { name: "css", image: "CSS" },
    { name: "express", image: "Express.js" },
    { name: "git", image: "Git" },
    { name: "html", image: "HTML" },
    { name: "javascript", image: "JavaScript" },
    { name: "jest", image: "Jest" },
    { name: "jquery", image: "jQuery" },
    { name: "mongodb", image: "MongoDB" },
    { name: "mysql", image: "MySQL" },
    { name: "nginx", image: "NGINX" },
    { name: "nextjs", image: "Next.js" },
    { name: "nodejs", image: "Node.js" },
    { name: "npm", image: "NPM" },
    { name: "postgresql", image: "PostgreSQL" },
    { name: "postman", image: "Postman" },
    { name: "prisma", image: "Prisma" },
    { name: "python", image: "Python" },
    { name: "react", image: "React" },
    { name: "ruby", image: "Ruby" },
    { name: "supabase", image: "Supabase" },
    { name: "tailwindcss", image: "Tailwind" },
    { name: "typescript", image: "TypeScript" },
    { name: "vercel", image: "Vercel" },
    { name: "vite", image: "Vite" },
    { name: "vscode", image: "VS Code" }
  ];

  return (
    <div className="flex w-full bg-gray-700 overflow-hidden">
      <IconSlider icons={skills} />
    </div>
  );
}

export default Tech;

