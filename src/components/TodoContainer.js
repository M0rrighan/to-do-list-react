import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function TodoContainer() {
const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Task 1",
    completed: true
  },
  {
    id: 2,
    title: "Task 2",
    completed: false
  },
  {
    id: 3,
    title: "Task 3",
    completed: false
  }
]);

const updateCheckbox = (id) => {
  setTodos(prevState => prevState.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo, completed: !todo.completed
      };
    }
    return todo;
  }));
};

const delTodo = id => {
  setTodos([
    ...todos.filter(todo => {
      return todo.id !== id;
    }),
  ]);
};

  return (
    <div>
      <Header />
      <InputTodo />
      <TodoList 
        todos={todos} 
        updateCheckbox={updateCheckbox}
        deleteItem={delTodo}/>
    </div>
  )
}

export default TodoContainer
