import React from 'react';
import Project from './project';

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;