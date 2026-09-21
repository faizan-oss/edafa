import { MongoClient, Db } from "mongodb";
import { config } from "./config.js";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDb(): Promise<Db> {
  if (db) {
    return db;
  }

  client = new MongoClient(config.mongoUrl);
  await client.connect();
  db = client.db(config.dbName);
  return db;
}

export async function closeDb(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

export async function insertLead(document: Record<string, unknown>): Promise<void> {
  const database = await connectDb();
  await database.collection("leads").insertOne({
    ...document,
    createdAt: new Date(),
  });
}
