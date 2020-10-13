import React, { useState } from 'react';

import TodoList, { Todo } from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodo: Todo = { id: Math.random().toString(), text: text };
    setTodos((oldTodos) => {
      return [...oldTodos, newTodo];
    });
  };

  const todoRemoveHandler = (id: string) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo addHandler={todoAddHandler} />
      <TodoList items={todos} onRemove={todoRemoveHandler} />
    </div>
  );
};

export default App;
