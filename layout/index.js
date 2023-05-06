import { Button } from '@mui/base';
import { useAppTheme } from '@/context/themeContext';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from '@mui/system';

export default function Layout({ chidlren }) {
  const { mode, toggleMode, theme } = useAppTheme();

  return (
    <>
      <Button onClick={toggleMode}>Tooghle</Button>

      <Button>{useTheme().palette.mode}</Button>

      <IconButton sx={{ ml: 1 }} onClick={toggleMode} color='inherit'>
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      {chidlren}
    </>
  );
}
