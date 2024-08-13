// src/pages/ProjectPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjects, updateProject } from '../services/projectService';
// import TodoItem from '../components/TodoItem';
import { exportToGist } from '../services/gistService';
import { generateMarkdown } from '../utils/generateMarkdown';
import TodoItem from '../component/TodoItem';

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProjects(id);
      setProject(data);
    };
    fetchProject();
  }, [id]);

  const handleAddTodo = async (description) => {
    const updatedProject = { ...project, todos: [...project.todos, { description, status: 'pending' }] };
    const data = await updateProject(id, updatedProject);
    console.log(data,"jj");
    
    setProject(data);
  };

  const handleExport = async () => {
    const markdownContent = generateMarkdown(project);
    const url = await exportToGist(markdownContent, project.title);
    console.log('Gist URL:', url);
  };

  return (
    <div>
      <h1>{project?.title}</h1>
      <button onClick={() => handleAddTodo(prompt('Enter todo description:'))}>
        Add Todo
      </button>
      <button onClick={handleExport}>Export as Gist</button>
      {project?.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ProjectPage;
