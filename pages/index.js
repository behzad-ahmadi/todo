import Todos from '@/components/pages/todo';
import { getAllTodos } from '@/lib/api-util';

export default function Home({ todos }) {
  console.log('res', todos);

  return <Todos todos={todos} />;
}

export async function getStaticProps() {
  let todos = {};
  try {
    todos = await getAllTodos();
  } catch (error) {
    console.log('getStaticProps', error);
  }

  return {
    props: {
      todos,
    },
    revalidate: 5,
  };
}
