import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import '../App.css';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // getting stored items
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
  // storing todos items
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const updateCheckbox = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const updateTitle = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: [...todos].length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  // ***** Fetch
  // ---Class Based---
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  // ---Function Based---
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then(response => response.json())
  //     .then(data => setTodos(data));
  // }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          updateCheckbox={updateCheckbox}
          updateTitle={updateTitle}
          deleteItem={deleteTodo}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
