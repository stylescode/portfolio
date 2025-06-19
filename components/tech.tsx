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
    <div className="flex w-3/4 border-2 border-gray-300 rounded-lg p-4 gap-4 flex-wrap justify-center">
      {skills.map((skill, index) => (
        <div key={skill.name} className="flex items-center border-2 rounded-xl px-4 py-2">
          <Image
            src={`https://skillicons.dev/icons?i=${skill.image.toLowerCase()}`}
            alt={`${skill.name} logo`}
            width={20}
            height={20}
            className="w-[20px] h-[20px] mr-3"
          />
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Tech;

