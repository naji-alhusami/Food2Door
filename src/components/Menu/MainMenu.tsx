import { MainMenuData } from "./MainMenu-data";
import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "../../util/fetch-menu-items";
import { type FormEvent, useRef, useState } from "react";

export default function MainMenu() {
  const itemName = useRef();
  const [itemData, setItemData] = useState();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["items"],
    queryFn: ({ signal }) => fetchMenuItems({ signal }),
  });

  function fetchItemsHandler(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <div className="text-center mt-32">
        <h1 className="text-5xl">Main Menu</h1>
        <div className="mx-2 mt-10  flex flex-wrap flex-row justify-between items-center">
          {MainMenuData.map((menu) => (
            <form
              key={menu.id}
              onSubmit={fetchItemsHandler}
              className="mx-4 cursor-pointer hover:text-[#ec4899] flex flex-col justify-center items-center"
            >
              <img src={menu.image} alt={menu.name} />
              <h2>{menu.name}</h2>
            </form>
          ))}
        </div>
      </div>
      <div>
        <h1>naji</h1>
      </div>
    </>
  );
}
