import Image from 'next/image';

const Tech = ({ technologies }) => {
  return (
    <div className="flex w-full bg-blue-700">
      {technologies.map((tech) => (
        <div key={tech} className="w-[200px] h-[200px]">
          <Image src={`https://skillicons.dev/icons?i=${tech}`} width={60} height={60} alt={`${tech} icon`}/>
        </div>
      ))}
    </div>
  );
}

export default Tech;