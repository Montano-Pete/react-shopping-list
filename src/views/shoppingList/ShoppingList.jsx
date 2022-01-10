import React from 'react';
import { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const nextId = 3;

const initialShoppingItems = [
  { id: 0, item: 'Ghost Pepper Salt', completed: false },
  { id: 1, item: 'Orange Juice', completed: false },
  { id: 2, item: 'Sourdough Bread', completed: false },
];

function shoppingReducer(shoppingItems, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...shoppingItems,
        {
          id: action.id,
          item: action.item,
          completed: false,
        },
      ];
    }
    case 'edited': {
      return shoppingItems.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
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
      type: 'added',
      id: nextId + 1,
      item,
    });
  };
  const handleEditShoppingItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };
  const handleDeleteShoppingItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Welcome to my Jank Shopping List made by yours truly</h1>
      <AddItem onAddItem={handleAddShoppingItem} />
      <ul>
        <ItemList
          shoppingItems={shoppingItems}
          onChangeShoppingItem={handleEditShoppingItem}
          onDeleteShoppingItem={handleDeleteShoppingItem}
        />
      </ul>
    </>
  );
}

export default ShoppingList;
