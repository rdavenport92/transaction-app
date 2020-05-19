import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import Main from './components/Main';

import mainTheme from './themes/mainTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
