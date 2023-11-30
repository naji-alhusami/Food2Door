export type ItemData = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ItemDataProps = {
  items: ItemData[];
};

export default function MainMenuItemData({ items }: ItemDataProps) {
  console.log(items);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center md:flex md:flex-row">
      {items.map((item) => (
        <div key={item.id} className="p-4 m-6 flex flex flex-col justify-center items-center border border-gray-200 gap-y-4">
          <img src={item.image} alt={item.name} className="max-w-[15rem] max-h-[15rem]"/>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <h2 className="text-[#ffc139] font-bold">{item.price} $</h2>
          <button className="bg-[#ffc139] px-6 py-2  rounded-full">Show Details</button>
        </div>
      ))}
    </div>
  );
}
