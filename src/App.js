import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import { data } from 'jquery';
import Budget from './Components/Budget/Budget'
import Portfolio from './Components/Portfolio/Portfolio';

function App(props) {
  const classes = useStyles()
  const [loggedInStatus, setloggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setuser] = useState({});

  const logged = (data) => {
      setloggedInStatus("LOGGED_IN");
      setuser(data);
    }
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path={"/dashboard"} render={props => (
            <Dashboard loggedInStatus={loggedInStatus} />
          )} />
          <Route exact path={'/budget'} component = {Budget}/>
          <Route exact path={"/portfolio"} component={Portfolio} />
          <Route path='/' render={props => ( 
          <div>
            <Auth logged={logged} loggedInStatus={loggedInStatus} />
          </div>
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
