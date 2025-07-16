import Image from 'next/image';
import IconSlider from './IconSlider';

const Technologies = ({}) => {

  const skills = [
    { name: "aws", image: "aws" },
    { name: "css", image: "css" },
    { name: "express", image: "expressjs" },
    { name: "git", image: "Git" },
    { name: "html", image: "HTML" },
    { name: "javascript", image: "JavaScript" },
    { name: "jest", image: "Jest" },
    { name: "jquery", image: "jQuery" },
    { name: "mongodb", image: "MongoDB" },
    { name: "mysql", image: "MySQL" },
    { name: "nginx", image: "NGINX" },
    { name: "next.js", image: "nextjs" },
    { name: "node.js", image: "nodejs" },
    { name: "npm", image: "NPM" },
    { name: "postgresql", image: "PostgreSQL" },
    { name: "postman", image: "Postman" },
    { name: "prisma", image: "Prisma" },
    { name: "python", image: "Python" },
    { name: "react", image: "React" },
    { name: "ruby", image: "Ruby" },
    { name: "supabase", image: "Supabase" },
    { name: "tailwind", image: "Tailwind" },
    { name: "typescript", image: "TypeScript" },
    { name: "vercel", image: "Vercel" },
    { name: "vite", image: "Vite" },
    { name: "vs code", image: "vscode" }
  ];

  return (
    <div className="flex w-4/5 border-2 border-gray-100 rounded-2xl p-12 flex-wrap justify-center shadow-xl mb-60">
      {skills.map((skill, index) => (
        <div key={skill.name} className="border border-gray-500 flex gap-4 items-center mb-6 mr-6 px-6 py-2 rounded-md shadow-lg">
          <Image
            src={`https://skillicons.dev/icons?i=${skill.image.toLowerCase()}`}
            alt={`${skill.name} logo`}
            width={30}
            height={30}
          />
          <div className="text-md">
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Technologies;

