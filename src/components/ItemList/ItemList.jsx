import Item from '../Item/Item';

export default function ItemList({
  shoppingItems,
  onChangeShoppingItem,
  onDeleteShoppingItem,
}) {
  return (
    <ul>
      {shoppingItems.map((item) => (
        <li key={item.id}>
          <Item
            item={item}
            onChange={onChangeShoppingItem}
            onDelete={onDeleteShoppingItem}
          />
        </li>
      ))}
    </ul>
  );
}
