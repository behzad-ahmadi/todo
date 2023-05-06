import { Add } from '@mui/icons-material';
import { Box, Container, IconButton, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';

export default function NewTodo() {
  const formik = useFormik();

  return (
    <Paper sx={{ width: 300, textAlign: 'center' }}>
      <Box
        component='form'
        sx={{
          display: 'flex',
          '& > :not(style)': { m: 1, width: '25ch' },
          justifyContent: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <Box sx={{ display: 'flex' }}>
          <TextField label='Standard' variant='standard' />

          <IconButton size='medium' color='inherit' sx={{ mt: 'auto' }}>
            <Add />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
