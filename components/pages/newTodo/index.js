import { Add } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

export default function NewTodo({ task }) {
  const [items, setItems] = React.useState(task?.items);

  // Validation Schema
  const validationSchema = yup.object({
    taskItem: yup.string('Enter new task').required('Task is required'),
  });

  // Formik
  const formik = useFormik({
    initialValues: { taskItem: '' },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      // const _items = [...formik.values.items];

      setItems((prev) => [
        {
          id: items.length + 1,
          title: values.taskItem,
          checked: false,
        },
        ...prev,
      ]);

      formik.resetForm();
      console.log('Values', values);
    },
  });

  // initial
  React.useEffect(() => {}, []);

  const checkboxChangeHandler = (e) => {
    const _items = [...items];

    _items[_items.findIndex((i) => i.id == e.target.name)].checked =
      e.target.checked;

    setItems(_items);
  };

  return (
    <Paper sx={{}}>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={formik.handleSubmit}
      >
        <Box sx={{ p: 1 }}>
          {/* <TextField
            name='taskTitle'
            label='Nnew task'
            variant='standard'
            value={formik.values.taskTitle}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.taskTitle)}
            helperText={formik.touched.taskTitle && formik.errors.taskTitle}
          /> */}
          <TextField
            name='taskItem'
            label='Add new task'
            variant='standard'
            value={formik.values.taskItem}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.taskItem)}
            helperText={formik.touched.taskItem && formik.errors.taskItem}
          />

          <IconButton type='submit' size='medium' color='inherit'>
            <Add />
          </IconButton>
        </Box>

        {/* Task list */}
        <Box sx={{ textAlign: 'start' }}>
          <FormControl>
            {items?.map((t) => {
              return (
                <FormControlLabel
                  key={t.id}
                  name={t.id.toString()}
                  control={
                    <Checkbox
                      color='success'
                      checked={items.find((i) => i.id == t.id)?.checked}
                      onChange={checkboxChangeHandler}
                    />
                  }
                  label={t.title}
                />
              );
            })}
          </FormControl>
        </Box>
      </Box>
    </Paper>
  );
}
