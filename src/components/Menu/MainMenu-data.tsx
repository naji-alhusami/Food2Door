type MainMenuTypes = {
  id: string;
  name: string;
  image: ImagePath;
};

type ImagePath =
  | "/Images/burger.svg"
  | "/Images/pizza.svg"
  | "/Images/drink.svg"
  | "/Images/pasta.svg"
  | "/Images/soup.svg"
  | "/Images/sushi.svg";

export const MainMenuData: MainMenuTypes[] = [
  { id: "1", name: "BURGER", image: "/Images/burger.svg" },
  { id: "2", name: "PIZZA", image: "/Images/pizza.svg" },
  { id: "3", name: "DRINK", image: "/Images/drink.svg" },
  { id: "4", name: "PASTA", image: "/Images/pasta.svg" },
  { id: "5", name: "SOUP", image: "/Images/soup.svg" },
  { id: "6", name: "SUSHI", image: "/Images/sushi.svg" },
];
