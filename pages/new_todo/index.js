import { useState } from 'react';
import todo from '../../components/pages/todo';

export default function NewTodoPage() {
  const [task, setTask] = useState();

  console.log('task Page', task);
  return <todo task={task} />;
}
