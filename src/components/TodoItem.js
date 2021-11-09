import React from 'react';

function TodoItem(props) {
  const {id, title, completed} = props.todo;
  function handleCheckbox () {
    props.updateCheckbox(id);
  };

  return (
    <li>
      <input 
      type="checkbox" 
      checked={completed}
      onChange={handleCheckbox}
      />
      <span>{title}</span>
      <button>DEL</button>
    </li>
  )
}

export default TodoItem
