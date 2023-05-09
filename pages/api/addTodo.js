import { connectDatabase, insertDocument } from '@/lib/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const todo = req.body.todo;

    if (!todo.title && (!todo.items || todo.items.length == 0)) {
      res.status(422).json({ message: "Empty todo can't be inserted" });
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
      const newTodo = { uid: 100, items: [{ title: 't1' }, { title: 't2' }] };

      const result = await insertDocument({
        client: client,
        collection: 'todo',
        document: newTodo,
      });

      newTodo._id = result.insertedId;

      res.status(201).json({ message: 'Added new todo.', todo: newTodo });
    } catch (error) {
      res.status(500).json({ message: 'Inserting to the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  }
}
