import './App.css';
import Appbar from './container/Appbar'
import * as React from 'react';
import theme from './Asset/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <Appbar/>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
