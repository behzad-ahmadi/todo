import { connectDatabase, insertDocument } from '@/lib/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const newTodo = req.body;
    console.log('newTodo', newTodo);
    // return error if data is epmty
    console.log('len', newTodo.length);

    if (!newTodo) {
      res.status(422).json({ message: "Empty todo can't be inserted." });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await insertDocument({
        client: client,
        collection: 'todo',
        document: newTodo,
      });

      newTodo._id = result.insertedId;

      res.status(201).json({ message: 'Added new todo.', todo: newTodo });
    } catch (error) {
      console.log('error', error);
      res.status(500).json({ error: 'Inserting to the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
}
