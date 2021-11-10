import React, { useState } from 'react';
import styles from "./TodoItem.module.css";
import { MdDeleteForever } from 'react-icons/md';

function TodoItem(props) {
  const {id, title, completed} = props.todo;

  function handleCheckbox () {
    props.updateCheckbox(id);
  }

  function handleDeleteItem () {
    props.deleteItem(id);
  }

  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     console.log("Cleaning up...")
  //   }
  // }, [])

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      setEditing(false);
    }
  };

  const handleUpdateTitle = (e) => {
    props.updateTitle(e.target.value, id);
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
        type="checkbox" 
        checked={completed}
        onChange={handleCheckbox}
        className={styles.checkbox}
        />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button onClick={handleDeleteItem}>
          <MdDeleteForever style={{
            color: "#eb4747",
            fontSize: "1.25rem",
            fontWeight: "600",
          }}/>
        </button>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={styles.textInput} 
        value={title} 
        onChange={handleUpdateTitle}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;
