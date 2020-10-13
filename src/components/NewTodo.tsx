import React, { useRef } from 'react';

import './NewTodo.css';

type TodoAddHandler = (text: string) => void;

type NewTodoProps = {
  addHandler?: TodoAddHandler;
};

const NewTodo: React.FC<NewTodoProps> = ({ addHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (addHandler) {
      addHandler(enteredText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
