import { Container } from '@mui/material';
import TodoCard from './todoCard';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Todos({ todos }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      mx={2}
    >
      {todos.todos?.map((t, idx) => (
        <Grid xs={2} sm={4} md={4} key={idx}>
          <TodoCard todo={t} />
        </Grid>
      ))}
    </Grid>
  );
}
