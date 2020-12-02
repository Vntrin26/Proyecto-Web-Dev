import Auth from './Components/Auth/Auth'
import useStyles from '../src/AppStyles';
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { data } from 'jquery';
import Budget from './Components/Budget/Budget'
import Portfolio from './Components/Portfolio/Portfolio';
import ProtectedRoute from './Helpers/ProtectedRoute'

function App(props) {
  const classes = useStyles()
  const [loggedInStatus, setloggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setuser] = useState({});
//
  const logged = (data) => {
      setloggedInStatus("LOGGED_IN");
      setuser(data);
    }

    /* const checkLoginStatus = () => {
      axios
      .get("http://localhost:3001/logged_in", {withCredentials: true }).then(response => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN"){
          setloggedInStatus({
            loggedInStatus: "LOGGED_IN"
          })
          setuser({
            user : response.data.user
          })
        }else if(!response.data.logged_in && loggedInStatus === "LOGGED_IN"){
          setloggedInStatus({
            loggedInStatus: "NOT_LOGGED_IN"
          })
          setuser({
            user : {}
          })
        }
      }).catch(error => {
        console.log("check login error", error);
      });
    } */

    /* useEffect(() => {
      checkLoginStatus()
    },[]);  */
  
    //CHANGE ROUTE TO PROTECTEDROUTE TO PROTECT :V
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path={"/dashboard"} render={props => (
            <Dashboard loggedInStatus={loggedInStatus} />
          )} />
          <Route path={'/budget'} component = {Budget}/>
          <Route path={"/portfolio"} component={Portfolio} />
          <Route exact = {true} path='/' render={props => ( 
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
