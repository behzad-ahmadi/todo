import Axios from 'axios';

const URLS = {
  insertDocument: '/todo/addTodo',
  updateDocument: '/todo/[id]',
  deleteDocument: '/todo/[id]',
  readDocument: '/todo/[id]',
  readAllDocuments: '/todo/todos',
};

const axios = Axios.create({
  baseURL: 'http://localhost:3000/api',
  'Content-Type': 'application/json',
  // Origin: 'http://localhost:3000',
});

// add new task
export async function addTodo(todo) {
  console.log('addTodo', todo);
  const { data } = await axios.post(URLS.insertDocument, todo);

  return data;
}

// get all todos
export async function getAllTodos() {
  const { data } = await axios.get(URLS.readAllDocuments);

  return data;
}
