import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todos/todosSlice';

const Header = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      dispatch(addTodo({
        text,
        id: Date.now(),
        completed: false,
        color: color
      }));
      setText('');
      setColor('');
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select color</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Red">Red</option>
      </select>
    </header>
  );
};

export default Header;
