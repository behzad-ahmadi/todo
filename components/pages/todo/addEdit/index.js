import { addTodo } from '@/lib/api-util';
import { Add } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

export default function Todo({ task }) {
  const [items, setItems] = React.useState(task?.items || []);
  const [taskId, setTaskid] = React.useState();

  // Validation Schema
  const validationSchema = yup.object({
    taskItem: yup.string('Enter new task').required('Task is required'),
  });

  // Formik
  const formik = useFormik({
    initialValues: { taskItem: '' },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      const _items = [
        {
          title: values.taskItem,
          checked: false,
        },
        ...items,
      ];

      setItems(_items);

      // Insert new todo
      if (!taskId) {
        console.log('Inserting');

        try {
          const result = await addTodo({ items: _items });

          setTaskid(result.todo._id);
          console.log('DATA', result);

          formik.resetForm();
        } catch (error) {
          console.log('error', error);
        }
      }
      // Update todo
      else {
        console.log('Updating...');
      }
    },
  });

  // initial
  React.useEffect(() => {
    if (!task) return;
    setTaskid(task.id);
    setItems(task.items);
    console.log('use', task);
  }, [task]);

  const checkboxChangeHandler = (e) => {
    const _items = [...items];

    _items[_items.findIndex((i) => i.id == e.target.name)].checked =
      e.target.checked;

    setItems(_items);
  };

  return (
    <Paper>
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
            {items?.map((t, idx) => {
              return (
                <FormControlLabel
                  key={idx}
                  name={idx.toString()}
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
