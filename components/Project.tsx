interface ProjectProps {
  project: {
    name: string,
    description: string,
    images: any,
    demoLink: string,
    codeLink: string
  }
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="border border-blue-300 flex flex-col w-1/2">
      <h1>{project.name}</h1>
      <div>{project.description}</div>
      <button className="bg-black text-white px-4 py-2 rounded-lg">
        <a href={project.demoLink}>
          Demo
        </a>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded-lg ml-2">
        <a href={project.codeLink}>
          Code
        </a>
      </button>
    </div>
  );
}

export default Project;