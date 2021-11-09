import React from 'react';

function TodoItem(props) {
  const {id, title, completed} = props.todo;

  function handleCheckbox () {
    props.updateCheckbox(id);
  }

  function deleteItem () {
    props.deleteItem(id);
  }

  return (
    <li>
      <input 
      type="checkbox" 
      checked={completed}
      onChange={handleCheckbox}
      />
      <span>{title}</span>
      <button onClick={deleteItem}>DEL</button>
    </li>
  )
}

export default TodoItem
