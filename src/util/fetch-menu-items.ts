const API_KEY: string = "e633aa666f424a359683e7f437df43de";

class CustomError extends Error {
  code?: number;
  info?: string;
}

export async function fetchMenuItems(item: string) {
  let url = `https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}`;

  if (
    item === "burger" ||
    item === "pizza" ||
    item === "drinks" ||
    item === "pasta" ||
    item === "soup" ||
    item === "sudhi"
  ) {
    url += "&query=" + item + "&number=12";
  }

  const response = await fetch(url);

  if (!response.ok) {
    const error = new CustomError("An Error Occured While Fetching Data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { items } = await response.json();

  return items;
}
