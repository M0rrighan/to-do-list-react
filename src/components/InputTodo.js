import React, { useState } from 'react'

function InputTodo(props) {
  const [inputField, setInputField] = useState({
    title: "",
  });

  const onChange = e => {
    setInputField({
      // ...inputField,
      title: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(inputField.title.trim()) {
      props.addTodoItem(inputField.title);
      setInputField({
        title: "",
      })
    } else {
      alert("ToDo Title cannot be empty");
    } 
  };
  
  return (
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add to do...."
        value={inputField.title}
        onChange={onChange}
      />
      <button>+</button>
      </form>
  );
}

export default InputTodo;
