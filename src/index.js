import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d7188',
      main: '#494E6B',
      dark: '#33364a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ac7e8a',
      main: '#985E6D',
      dark: '#6a414c',
    }
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
    <MuiThemeProvider theme ={theme}>
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
