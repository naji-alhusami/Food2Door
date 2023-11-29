class CustomError extends Error {
  code?: number;
  info?: string;
}

export async function fetchMenuItems() {
  const mongodbUrl = process.env.MONGODB_URL;
  const url = process.env.URL;

  if (!url || !mongodbUrl) {
    throw new Error("URL is not defined in the environment variables.");
  }
  const fetch_URL = url + mongodbUrl;

  const response = await fetch(fetch_URL);

  if (!response.ok) {
    const error = new CustomError("An Error Occured While Fetching Data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { items } = await response.json();

  return items;
}
