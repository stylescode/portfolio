import Image from 'next/image';
import IconSlider from './IconSlider';

const Technologies = ({}) => {

  const skills = [
    { name: "css", image: "CSS" },
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
    <div className="flex w-3/4 border-2 border-gray-300 rounded-lg p-4 gap-4 flex-wrap justify-center">
      {skills.map((skill, index) => (
        <div key={skill.name} className="border border-grey-300 flex items-center mb-3 mr-3 px-4 py-2 rounded-xl shadow-xl">
          <Image
            src={`https://skillicons.dev/icons?i=${skill.image.toLowerCase()}`}
            alt={`${skill.name} logo`}
            width={20}
            height={20}
            className="w-[18px] h-[18px] mr-3"
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

