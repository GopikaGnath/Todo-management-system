// src/components/ProjectList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  if (!projects.length) {
    return <p>No projects available. Please create a new project.</p>;
  }

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
