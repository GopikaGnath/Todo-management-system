// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { getProjects, createProject } from '../services/projectService';
import ProjectList from '../component/ProjectList';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
    //   const data = await getProjects();
    //   setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleCreateProject = async (title) => {
    const newProject = await createProject({ title, todos: [] });
    console.log(newProject);
    
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
      <button onClick={() => handleCreateProject(prompt('Enter project title:'))}>
        Create Project
      </button>
    </div>
  );
};

export default HomePage;
