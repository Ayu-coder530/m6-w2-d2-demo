import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem'; // Ensure the path is correct

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
