import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted, markAllCompleted } from '../todos/todosSlice';
import { setStatusFilter, addColorFilter, removeColorFilter } from '../filters/filtersSlice';

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const completedCount = todos.filter(todo => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  const handleStatusChange = (status) => {
    dispatch(setStatusFilter(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(removeColorFilter(color));
    } else {
      dispatch(addColorFilter(color));
    }
  };

  return (
    <footer>
      <div>
        <button onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </div>
      <span>{remainingCount} {remainingCount === 1 ? 'item' : 'items'} left</span>
      <div className="status-buttons">
        <span>Filter by Status:</span>
        <button onClick={() => handleStatusChange('All')} className={status === 'All' ? 'selected' : ''}>All</button>
        <button onClick={() => handleStatusChange('Active')} className={status === 'Active' ? 'selected' : ''}>Active</button>
        <button onClick={() => handleStatusChange('Completed')} className={status === 'Completed' ? 'selected' : ''}>Completed</button>
      </div>
      <div className="color-filter">
        <span>Filter by Color:</span>
        {['Green', 'Blue', 'Orange', 'Purple', 'Red'].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={colors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

