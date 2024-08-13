// src/utils/generateMarkdown.js
export const generateMarkdown = (project) => {
    const pendingTodos = project.todos.filter(todo => todo.status === 'pending');
    const completedTodos = project.todos.filter(todo => todo.status === 'completed');
  
    return `
  # ${project.title}
  
  ## Summary
  ${completedTodos.length} / ${project.todos.length} completed.
  
  ## Pending Todos
  ${pendingTodos.map(todo => `- [ ] ${todo.description}`).join('\n')}
  
  ## Completed Todos
  ${completedTodos.map(todo => `- [x] ${todo.description}`).join('\n')}
  `;
  };
  