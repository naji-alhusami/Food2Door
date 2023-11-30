// import { AbortSignal } from "abort-controller";

class CustomError extends Error {
  code?: number;
  info?: string;
}

type FetchMenuItemsParams = {
  signal: AbortSignal;
  itemName: string;
};

export async function fetchMenuItems({ itemName }: FetchMenuItemsParams) {
  const fetch_URL = `https://food-order-e25e0-default-rtdb.firebaseio.com/${itemName}.json`;
  console.log(itemName);

  try {
    const response = await fetch(fetch_URL);

    if (!response.ok) {
      const error = new CustomError("An Error Occurred While Fetching Data");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const items = await response.json();
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
