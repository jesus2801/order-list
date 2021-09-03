import { createTheme } from '@material-ui/core';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#1b7cff',
      light: '#2b94fe',
      dark: '#0e49ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff113c',
      light: '#ff1e55',
      dark: '#fb1022',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
});
