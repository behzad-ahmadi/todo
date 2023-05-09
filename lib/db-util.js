import { MongoClient } from 'mongodb';

// It should not be here for security result
const uri = `mongodb+srv://behzad:yexATLvuzfPyYDIY@cluster0.7ebsvtl.mongodb.net/todo_db?retryWrites=true&w=majority`;

// const dbName = 'todo_db';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(uri);

  return client;
};

export const insertDocument = async ({ client, collection, document }) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};
