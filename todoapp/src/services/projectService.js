// src/services/projectService.js
import axios from 'axios';
const BASE_URL="http://localhost:/8080"

const API_URL = `${BASE_URL}/api/projects`; // Replace with your actual API endpoint

export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProject = async (project) => {
  const response = await axios.post(API_URL, project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await axios.put(`${API_URL}/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
