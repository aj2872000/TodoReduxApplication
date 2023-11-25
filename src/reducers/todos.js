// src/reducers/todos.js

import { createReducer } from 'reduxsauce';
import { Types } from '../actions/todos';

const initialState = {
  todos: [],
};

const addTodo = (state, { text }) => ({
  ...state,
  todos: [...state.todos, { id: Date.now(), text, completed: false }],
});

const completeTodo = (state, { id }) => ({
  ...state,
  todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo)),
});

const deleteTodo = (state, { id }) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== id),
});

const reducer = createReducer(initialState, {
  [Types.ADD_TODO]: addTodo,
  [Types.COMPLETE_TODO]: completeTodo,
  [Types.DELETE_TODO]: deleteTodo,
});

export default reducer;
