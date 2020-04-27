import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme/theme';

import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Main />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
