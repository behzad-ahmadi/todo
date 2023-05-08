import { dbPass, username } from '@/lib/db';
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://behzad:yexATLvuzfPyYDIY@cluster0.7ebsvtl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const run = async () => {
  try {
    const db = client.db('todo_db');
    const todo = db.collection('todo');

    await todo.insertOne({ uid: 1, items: { title: 'first' } });

    return true;
  } catch (error) {
    console.log('db Error', error);
  } finally {
    client.close;
  }
};

export default async function handler(req, res) {
  const result = await run();

  if (result) res.status(201).json({ result: 'Inserted' });
  else res.status(400).json({ result: 'ERROR' });
}
