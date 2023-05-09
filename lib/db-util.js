import { MongoClient } from 'mongodb';

// It should not be here for security result
const uri = `mongodb+srv://behzad:yexATLvuzfPyYDIY@cluster0.7ebsvtl.mongodb.net/todo_db?retryWrites=true&w=majority`;

// const dbName = 'todo_db';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(uri);

  return client;
};

// Insert into collection
export async function insertDocument({ client, collection, document }) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

// Fetch one doc from collection
export async function getOneDocument({ client, collection, documentId }) {
  const db = client.db();

  const result = await db
    .collection(collection)
    .findOne({}, { _id: documentId });

  return result;
}

// Fetch all itmes from a collection
export async function getAllDocument({ client, collection }) {
  const db = client.db();

  const result = await db.collection(collection).find().toArray();

  return result;
}

// Update one document from collection
export async function UpdateDocument({
  client,
  collection,
  documentId,
  newValues,
}) {
  const db = client.db();

  const result = await db
    .collection(collection)
    .updateOne({ _id: documentId }, newValues);

  return result;
}
