import React from 'react';
import './index.scss';
import { StoreContext } from 'storeon/react';
import { store } from './store';
import { MainContent } from './components/MainContent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <MainContent />
      </StoreContext.Provider>
    </ThemeProvider>
  );
};

export default App;
