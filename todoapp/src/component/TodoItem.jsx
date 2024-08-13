// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => (
  <div>
    <input
      type="checkbox"
      checked={todo.status === 'completed'}
      onChange={() => onUpdate({ ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' })}
    />
    <span>{todo.description}</span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;
