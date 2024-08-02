import React from 'react';
import Project from './project';

const Projects = ({ projects }) => {
  return (
    <div className="bg-gray-600 max-w-full px-[40px] py-[40px] grid ">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;