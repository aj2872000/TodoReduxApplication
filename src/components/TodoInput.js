// src/components/TodoInput.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as TodoActions } from '../actions/todos';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text) {
      dispatch(TodoActions.addTodoAsync(text)); // Dispatch the asynchronous action
      setText('');
    }
  };

  console.log(text)

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
