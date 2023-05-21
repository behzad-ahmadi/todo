import { connectDatabase, getAllDocument } from '@/lib/db-util';

export default async function handler(req, res) {
  // Fetch one documnet by ID
  if (req.method === 'GET') {
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const todos = await getAllDocument({
        client: client,
        collection: 'todo',
      });

      res.status(200).json({ todos });
    } catch (error) {
      console.log('getDocument', error);
      res.status(500).json({ message: 'Fetching from the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  }
}
