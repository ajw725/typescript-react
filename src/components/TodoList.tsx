import React from 'react';

interface Todo {
  id: string;
  text: string;
}

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
