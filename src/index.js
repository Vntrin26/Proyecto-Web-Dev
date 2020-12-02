import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Budget from './Components/Budget/Budget'
import Portfolio from './Components/Portfolio/Portfolio';
import ProtectedRoute from './Helpers/ProtectedRoute'

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
       <BrowserRouter>
        <Switch>
          <ProtectedRoute path={"/dashboard"} component = {Dashboard}/>
          <ProtectedRoute path={'/budget'} component = {Budget}/>
          <ProtectedRoute path={"/portfolio"} component={Portfolio} />
          <Route exact = {true} path='/' component ={Auth}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
