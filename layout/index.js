import { Button } from '@mui/base';
import { useAppTheme } from '@/context/themeContext';
import { Box, IconButton, Paper, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import AppBarSection from './appBar';

export default function Layout({ chidlren }) {
  return (
    <>
      <AppBarSection />

      {/* Space for fixed appbar */}
      <Box mt={8}></Box>

      {chidlren}
    </>
  );
}
