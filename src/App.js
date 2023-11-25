// src/App.js

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  console.log('ajay')
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
