import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import {CloudWaveEffect} from 'react-background-animation'
import { Fragment } from 'react';

function App() {
  const classes = useStyles()
  return (
    <Fragment>
      <CloudWaveEffect/>
      <Auth></Auth>
    </Fragment>
  );
}

export default App;
