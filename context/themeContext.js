import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = React.createContext({
  mode: '',
  toggleMode: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState('dark');

  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const toggleMode = () => setMode(mode == 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => React.useContext(ThemeContext);
