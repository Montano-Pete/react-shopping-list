import { React, useReducer } from 'react';

const initialShoppingItems = [
  { id: 0, item: 'Ghost Pepper Salt', completed: false },
  { id: 1, item: 'Orange Juice', completed: false },
  { id: 2, item: 'Sourdough Bread', completed: false },
];

function shoppingReducer(shoppingItems, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...shoppingItems,
        {
          id: action.id,
          item: action.item,
          completed: false,
        },
      ];
    }
    case 'edit': {
      return shoppingItems.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
    }
    case 'delete': {
      return shoppingItems.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown actions: ${action.type}`);
    }
  }
}

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(
    shoppingReducer,
    initialShoppingItems
  );

  const handleAddShoppingItem = (item) => {
    dispatch({
      type: 'add',
      id: +1,
      item,
    });
  };
  const handleEditShoppingItem = (item) => {
    dispatch({
      type: 'edit',
      item,
    });
  };
  const handleDeleteShoppingItem = (itemId) => {
    dispatch({
      type: 'delete',
      id: itemId,
    });
  };

  return (
    <div>
      <h1>This will be a rendered shopping list in no time!</h1>
    </div>
  );
}

export default ShoppingList;
