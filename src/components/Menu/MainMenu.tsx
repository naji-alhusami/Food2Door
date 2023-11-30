import { MainMenuData } from "./MainMenu-data";
import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "../../util/fetch-menu-items";
import { type FormEvent, useState } from "react";
import MainMenuItemData from "./MainMenyItems";
import { type ItemData } from "./MainMenyItems";

export default function MainMenu() {
  const [itemName, setItemName] = useState("");
  // const [items, setItemsData] = useState<ItemData[]>();

  const { data, isPending, isError } = useQuery({
    queryKey: ["items", { item: itemName }],
    queryFn: ({ signal }) => fetchMenuItems({ signal, itemName }),
  });

  function fetchItemsHandler(event: FormEvent<HTMLFormElement>, item: string) {
    event.preventDefault();

    console.log(item);
    setItemName(item);
  }

  let content = <p>Please click on the item wanted</p>;

  if (isPending) {
    content = <p className="h-32">Loading...</p>;
  }

  if (isError) {
    content = <p>Error</p>;
  }

  if (data) {
    if (itemName) {
      console.log(data);
      content = <MainMenuItemData items={data as ItemData[]} />;
    }
  }

  return (
    <>
      <div className="text-center mt-32">
        <h1 className="text-5xl">Main Menu</h1>
        <div className="mx-2 mt-10  flex flex-wrap flex-row justify-between items-center">
          {MainMenuData.map((menu) => (
            <form
              key={menu.id}
              onSubmit={(e) => fetchItemsHandler(e, menu.name)}
              className="mx-4 cursor-pointer hover:text-[#ec4899] flex flex-col justify-center items-center"
            >
              <img src={menu.image} alt={menu.name} />
              <button type="submit" data-itemname={menu.name}>
                {menu.name}
              </button>
            </form>
          ))}
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}
