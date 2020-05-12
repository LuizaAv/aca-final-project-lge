import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import SnackbarProvider from './components/Snackbars/SnackbarProvider';
import StoreProvider from './store/StoreProvider';
import LanguageProvider from './languages/LanguageProvider';
import MainProvider from './pages/Main/MainProvider';
import LoadingProvider from './components/Loading/LoadingProvider';
import theme from './theme/theme';
import Main from './pages/Main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <StoreProvider>
          <SnackbarProvider>
            <HashRouter>
              <LoadingProvider>
                <MainProvider>
                  <Main />
                </MainProvider>
              </LoadingProvider>
            </HashRouter>
          </SnackbarProvider>
        </StoreProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
