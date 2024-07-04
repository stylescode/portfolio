import Image from 'next/image';

const Tech = ({ technologies }) => {
  return (
    <div className="flex w-full">
      {technologies.map((tech) => (
        <div key={tech} className="w-[200px] h-[200px]">
          <Image className="rounded-xl" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`} width={50} height={50} alt={`${tech} icon`}/>
      </div>
      ))}
    </div>
  );
}

export default Tech;