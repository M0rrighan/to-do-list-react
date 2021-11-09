import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function TodoContainer() {
const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Setup development environment",
    completed: true
  },
  {
    id: 2,
    title: "Develop website and add content",
    completed: false
  },
  {
    id: 3,
    title: "Deploy to live server",
    completed: false
  }
]);

function updateCheckbox(id) {
  setTodos(prevState => prevState.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo, completed: !todo.completed
      };
    }
    return todo;
  }));

}

  return (
    <div>
      <Header />
      <InputTodo />
      <TodoList todos={todos} updateCheckbox={updateCheckbox}/>
    </div>
  )
}

export default TodoContainer
