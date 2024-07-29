import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <select value={todo.color} readOnly>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Red">Red</option>
      </select>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>✕</button>
    </li>
  );
};

export default TodoListItem;
