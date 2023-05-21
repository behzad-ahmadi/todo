import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Check,
  CheckBox,
  CheckBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from '@mui/icons-material';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TodoCard({ todo }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {todo.title}
        </Typography>

        {todo.items?.map((item, idx) => {
          return (
            <Box display={'flex'} flexWrap={'nowrap'} gap={1} key={idx}>
              {todo.checked && <CheckBoxOutlined />}
              {!todo.checked && <IndeterminateCheckBoxOutlined />}
              {item.title}
            </Box>
          );
        })}
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
