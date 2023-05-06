import { Box } from '@mui/material';

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
