interface ProjectProps {
  project: {
    name: string;
    description: string;
    images: {}
  }
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <div>{project.description}</div>
      <button>Visit Project</button>
    </div>
  );
}

export default Project;