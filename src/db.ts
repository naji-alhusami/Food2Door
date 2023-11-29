import { MongoClient } from "mongodb";

export async function ConnectToDatabase() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://najihussami:2eDfDL3wzF7d50DQ@cluster0.p5janj2.mongodb.net/foodOrder?retryWrites=true&w=majority"
    );

    await client.close();

    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
