import React from 'react';
import { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [update, setUpdate] = useState(false);

  let itemContent;

  if (update) {
    itemContent = (
      <>
        <input
          type="text"
          value={item.item}
          onChange={(event) => {
            onChange({ ...item, item: event.target.value });
          }}
        />
        <button
          aria-label="save"
          type="button"
          name="save"
          onClick={() => setUpdate(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p style={{ textDecoration: item.completed ? 'line-through' : null }}>
          {item.item}
        </p>
        <button
          aria-label="update"
          type="button"
          onClick={() => setUpdate(true)}
        >
          Update Item
        </button>
      </>
    );
  }

  return (
    <div>
      Completed:
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(event) => {
          onChange({ ...item, completed: event.target.value });
        }}
      />
      {itemContent}
      <button
        aria-label="delete"
        type="button"
        onClick={() => onDelete(item.id, item.completed)}
      >
        Delete Item
      </button>
    </div>
  );
}
