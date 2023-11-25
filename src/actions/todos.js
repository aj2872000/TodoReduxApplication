// src/actions/todos.js

import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  addTodo: ["text"],
  completeTodo: ["id"],
  deleteTodo: ["id"],
  addTodoAsync: ['text'],
});

export { Types, Creators };
