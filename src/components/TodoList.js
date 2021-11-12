import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  const {
    todos, updateCheckbox, updateTitle, deleteItem,
  } = props;

  const items = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      updateCheckbox={updateCheckbox}
      updateTitle={updateTitle}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div>
      {items}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(Array).isRequired,
  updateCheckbox: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoList;
