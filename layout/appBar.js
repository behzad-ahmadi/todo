import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppTheme } from '@/context/themeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function AppBarSection() {
  const { toggleMode, theme } = useAppTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>

          <IconButton onClick={toggleMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
