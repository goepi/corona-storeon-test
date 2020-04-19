import React from 'react';
import './index.scss';
import { StoreContext } from 'storeon/react';
import { store } from './store';
import { MainContent } from './components/MainContent';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <MainContent />
    </StoreContext.Provider>
  );
};

export default App;
