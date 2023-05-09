import NewTodo from '../../components/pages/newTodo';

export default function NewTodoPage() {
  const [task, setTask] = useState();

  console.log('task Page', task);
  return <NewTodo task={task} />;
}
