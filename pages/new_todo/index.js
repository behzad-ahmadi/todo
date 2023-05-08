import { useEffect, useState } from 'react';
import NewTodo from '../../components/pages/newTodo';

export default function NewTodoPage() {
  const [task, setTask] = useState();

  useEffect(() => {
    setTask(
      JSON.parse(localStorage.getItem('a83d08ec-ec96-405b-a090-c3f21d05f627'))
    );
  }, []);
  console.log('task Page', task);
  return <NewTodo task={task} />;
}
