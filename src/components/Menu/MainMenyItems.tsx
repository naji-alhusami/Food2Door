export type ItemData = {
  id: string;
  name: string;
  price: string;
};

type ItemDataProps = {
  items: ItemData[];
};

export default function MainMenuItemData({ items }: ItemDataProps) {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
        </div>
      ))}
    </div>
  );
}
