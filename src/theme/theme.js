import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64dd17',
    },
    secondary: {
      main: '#ff5252',
    },
    tertiary: {
      main: '#3949ab',
      dark: '#273377',
      light: '#606dbb',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
  shape: {
    borderRadius: 25,
  },
});

export default theme;
