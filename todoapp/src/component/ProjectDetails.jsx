// src/components/ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProject, updateProject, deleteProject } from '../services/projectService';
import TodoItem from './TodoItem';
import { generateMarkdown } from '../utils/generateMarkdown';
import { exportToGist } from '../services/gistService';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProject(id);
      setProject(data);
    };
    fetchProject();
  }, [id]);

  const handleAddTodo = async () => {
    const updatedProject = { 
      ...project, 
      todos: [...project.todos, { description: newTodo, status: 'pending', createdDate: new Date() }] 
    };
    const data = await updateProject(id, updatedProject);
    setProject(data);
    setNewTodo('');
  };

  const handleUpdateTodo = async (updatedTodo) => {
    const updatedTodos = project.todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    const updatedProject = { ...project, todos: updatedTodos };
    const data = await updateProject(id, updatedProject);
    setProject(data);
  };

  const handleDeleteTodo = async (todoId) => {
    const updatedTodos = project.todos.filter(todo => todo.id !== todoId);
    const updatedProject = { ...project, todos: updatedTodos };
    const data = await updateProject(id, updatedProject);
    setProject(data);
  };

  const handleExport = async () => {
    const markdownContent = generateMarkdown(project);
    const url = await exportToGist(markdownContent, project.title);
    alert(`Gist URL: ${url}`);
  };

  if (!project) {
    return <p>Loading project details...</p>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Created on: {new Date(project.createdDate).toLocaleDateString()}</p>

      <h3>Todos</h3>
      <ul>
        {project.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdateTodo}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <button onClick={handleExport}>Export as Gist</button>
    </div>
  );
};

export default ProjectDetails;
