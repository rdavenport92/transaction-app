import React from 'react';
import { ThemeProvider, Typography, useTheme } from '@material-ui/core';

import './App.css';

function App() {
  const mainTheme = useTheme();
  return (
    <ThemeProvider theme={mainTheme}>
      <Typography>Testing</Typography>
    </ThemeProvider>
  );
}

export default App;
