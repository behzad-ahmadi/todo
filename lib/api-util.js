import Axios from 'axios';

const URLS = {
  insertDocument: '/todo/addTodo',
  updateDocument: '/todo/[id]',
  deleteDocument: '/todo/[id]',
  readDocument: '/todo/[id]',
};

const axios = Axios.create({
  baseURL: 'http://localhost:3000/api',
  'Content-Type': 'application/json',
  // Origin: 'http://localhost:3000',
});

export async function addTodo(todo) {
  console.log('addTodo', todo);
  const { data } = await axios.post(URLS.insertDocument, todo);

  return data;
}
