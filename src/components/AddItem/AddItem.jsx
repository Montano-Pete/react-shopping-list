import React, { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setItem('');
    onAddItem(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Items here"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />{' '}
      <button type="submit">Add to List</button>
    </form>
  );
}
