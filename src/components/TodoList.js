import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {

const items = props.todos.map((todo) => (
  <TodoItem 
    key={todo.id}
    todo={todo} 
    updateCheckbox={props.updateCheckbox}
    deleteItem={props.deleteItem}
  />
));

  return (
    <div>
      {items}
    </div>
  )
}

export default TodoList
