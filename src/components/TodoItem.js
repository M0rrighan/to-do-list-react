import React from 'react';
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const {id, title, completed} = props.todo;

  function handleCheckbox () {
    props.updateCheckbox(id);
  }

  function deleteItem () {
    props.deleteItem(id);
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <li className={styles.item}>
      <input 
      type="checkbox" 
      checked={completed}
      onChange={handleCheckbox}
      className={styles.checkbox}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button onClick={deleteItem}>DEL</button>
    </li>
  )
}

export default TodoItem
