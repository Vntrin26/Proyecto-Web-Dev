import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import {CloudWaveEffect} from 'react-background-animation'
import { Fragment } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Budget from './Components/Budget/Budget'

function App() {
  const classes = useStyles()
  return (
    <Fragment>
      {/* <CloudWaveEffect/>
      <Auth></Auth> */}
      {/* <Dashboard/> */}
      <Budget/>
      
    </Fragment>
  );
}

export default App;
