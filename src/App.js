import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import SnackbarProvider from './components/Snackbars/SnackbarProvider';
import theme from './theme/theme';
import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <HashRouter>
          <Main />
        </HashRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
