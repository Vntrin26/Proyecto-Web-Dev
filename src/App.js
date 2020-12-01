import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import {CloudWaveEffect} from 'react-background-animation'
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import { data } from 'jquery';

function App() {
  const classes = useStyles()
  const [loggedInStatus, setloggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setuser] = useState({});

  const logged = () => {
      setloggedInStatus("LOGGED_IN");
      setuser("");
    }
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path={"/dashboard"} render={props => (
            <Dashboard loggedInStatus={loggedInStatus} />
          )} />
          <Route path='/' render={props => (
        <div>
          <CloudWaveEffect />
          <Auth loggedInStatus={loggedInStatus} />
        </div>
          )} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
