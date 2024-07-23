import Image from 'next/image';

const Tech = ({}) => {

  const skills = [["css", "CSS"], ["express", "Express.js"], ["git", "Git"], ["html", "HTML"], ["javascript", "JavaScript"], ["jest", "Jest"], ["jquery", "jQuery"], ["mongodb", "MongoDB"], ["mysql", "MySQL"], ["nginx", "NGINX"], ["nextjs", "Next.js"], ["nodejs", "Node.js"], ["npm", "NPM"], ["postgresql", "PostgreSQL"], ["postman", "Postman"], ["prisma", "Prisma"], ["python", "Python"], ["react", "React"], ["ruby", "Ruby"], ["supabase", "Supabase"], ["tailwindcss", "Tailwind"], ["typescript", "TypeScript"], ["vercel", "Vercel"], ["vite", "Vite"], ["vscode", "VS Code"]];

  return (
    <div className="flex w-full bg-gray-700 overflow-hidden">
      {skills.map((tech) => (
        <div key={tech[0]} className="w-[200px] h-[200px] flex flex-col items-center">
          <Image src={`https://skillicons.dev/icons?i=${tech[0]}`} width={60} height={60} alt={`${tech[0]} icon`}/>
          <div>{tech[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default Tech;