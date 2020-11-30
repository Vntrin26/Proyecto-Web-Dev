import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import {CloudWaveEffect} from 'react-background-animation'
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  const classes = useStyles()
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route path='/auth' render={props =>
        <div>
          <CloudWaveEffect />
          <Auth />
        </div>
        } />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
