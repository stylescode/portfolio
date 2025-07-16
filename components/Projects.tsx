import React from 'react';
import Project from './Project';

interface ProjectType {
  name: string;
  description: string;
  images: string[];
  demoLink: string;
  codeLink: string;
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="border border-black flex w-4/5 justify-evenly mb-60" >
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;