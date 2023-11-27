import { MainMenuData } from "./MainMenu-data";

export default function MainMenu() {
  return (
    <div className="mx-2 mt-10  flex flex-wrap flex-row justify-between items-center">
      {MainMenuData.map((menu) => (
        <div key={menu.id} className="mx-4 cursor-pointer hover:text-[#ec4899] flex flex-col justify-center items-center">
          <img src={menu.image} alt={menu.name} />
          <h2>{menu.name}</h2>
        </div>
      ))}
    </div>
  );
}
