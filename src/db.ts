// // import { MongoClient } from "mongodb";

// // export async function ConnectToDatabase() {
// //   try {
// //     const mongodbUrl = process.env.MONGODB_URL;

// //     if (!mongodbUrl) {
// //       throw new Error(
// //         "MongoDB URL is not defined in the environment variables."
// //       );
// //     }

// //     const client = await MongoClient.connect(mongodbUrl);

// //     // await client.close();

// //     return client;
// //   } catch (error) {
// //     console.error("Error connecting to MongoDB:", error);
// //     throw error;
// //   }
// // }

// export async function fetchItems() {
//   const response = await fetch(
//     "https://food-order-e25e0-default-rtdb.firebaseio.com/"
//   );

//   if(!response.ok) {
//     const error = 
//   }

//   // await client.close();

//   return client;
//   // } catch (error) {
//   console.error("Error connecting to MongoDB:", error);
//   throw error;
//   // }
// }
