import { connectDatabase, getOneDocument } from '@/lib/db-util';

export default async function handler(req, res) {
  const { id } = req.body;

  if (req.method === 'GET') {
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await getOneDocument({
        client: client,
        documentId: id,
        collection: 'todo',
      });
      console.log('res', result);
      res.status(200).json({ todo: result });
    } catch (error) {
      console.log('getDocument', error);
      res.status(500).json({ message: 'Fetching from the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  }
  // Update Document
  else if (req.method === 'PUT') {
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await getOneDocument({
        client: client,
        documentId: id,
        collection: 'todo',
      });
      console.log('res', result);
      res.status(200).json({ todo: result });
    } catch (error) {
      console.log('getDocument', error);
      res.status(500).json({ message: 'Fetching from the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
}
