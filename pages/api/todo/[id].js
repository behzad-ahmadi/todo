import {
  updateDocument,
  connectDatabase,
  getOneDocument,
  deleteDocument,
} from '@/lib/db-util';

export default async function handler(req, res) {
  const { id } = req.body;

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
      const result = await getOneDocument({
        client: client,
        documentId: id,
        collection: 'todo',
      });

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
    const values = Object.assign({}, req.body);
    delete values.id;

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await updateDocument({
        client: client,
        documentId: id,
        collection: 'todo',
        newValue: values,
      });

      console.log('updateDocument', result);
      res.status(201).json({ todo: result });
    } catch (error) {
      console.log('getDocument', error);
      res.status(500).json({ message: 'Fetching from the collection failed!' });
      return;
    } finally {
      await client.close();
    }
  }

  // Delete Document
  else if (req.method === 'DELETE') {
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await deleteDocument({
        client: client,
        documentId: id,
        collection: 'todo',
      });

      console.log('deleteDocument', result);
      res.status(201).json({ todo: result });
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
