import React from 'react';

import './TodoList.css';

export interface Todo {
  id: string;
  text: string;
}

type RemoveHandler = (id: string) => void;

interface TodoListProps {
  items: Todo[];
  onRemove: RemoveHandler;
}

const TodoList: React.FC<TodoListProps> = ({ items, onRemove }) => {
  const removeTodo = (todoId: string) => {
    onRemove(todoId);
  };

  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={removeTodo.bind(null, t.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
