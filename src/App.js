import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import {CloudWaveEffect} from 'react-background-animation'
import { Fragment } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const classes = useStyles()
  return (
    <Fragment>
      {/* <CloudWaveEffect/>
      <Auth></Auth> */}
      <Dashboard/>
    </Fragment>
  );
}

export default App;
