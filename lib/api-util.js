import Axios from 'axios';

const axios = Axios.create({ url: '127.0.0.1:3000/api' });

async function addTodo(todo) {
  const result = await axios.post();
}
