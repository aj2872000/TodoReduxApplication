// src/components/TodoList.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creators as TodoActions } from "../actions/todos";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
console.log(todos)
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          {todo.text}
          <button onClick={() => dispatch(TodoActions.completeTodo(todo.id))}>
            Complete
          </button>
          <button onClick={() => dispatch(TodoActions.deleteTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
