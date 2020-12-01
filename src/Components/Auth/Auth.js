import React, {Fragment, useState} from 'react';
import axios from "axios";
import {Button, CssBaseline, TextField, Grid, Typography, Container} from '@material-ui/core';
import {AccountBalanceWallet, Email, Lock, AccountCircle} from '@material-ui/icons';
import useStyles from './AuthStyles'
import { useHistory } from 'react-router-dom';


export default function SignIn(props) {

  let history = useHistory();

  const [datos, setDatos] = useState({
    email: '',
    password: '',
    registrationErrors: '',
    username: '',
  });

  const [registerB, setRegisterB] = useState({
    showUser: false,
  });

  const handleSuccessfulAuth = (data) => {
    history.push("/dashboard");
  }

  const classes = useStyles();

  const handleChange = (e) =>{
    e.preventDefault();
    setDatos({ ...datos, [e.target.name]: e.target.value})
  };

  const registerContent = (e) =>{
    e.preventDefault();
    setRegisterB({showUser: true})
  }
  
  const loginContent = (e) =>{
    e.preventDefault();
    setRegisterB({showUser: false})
  }
  let content = null;

  let register = null;

  let nevermind = null;

  let donthave =
  <Grid item xs = '6'>
    <Button
    onClick = {registerContent}
    type="submit"
    fullWidth
    color="secondary"
    className={classes.submit}
    onC
    >
    Dont Have Account
    </Button>
  </Grid>


  let login = 
  <Grid item xs = '6'>
    <Button
    type="submit"
    fullWidth
    color="primary"
    className={classes.submit}
    >
    Log In
    </Button>
  </Grid>;

  if(registerB.showUser){
    console.log("esto jala");
    content = ( 
      <Fragment>
        <Grid item xs = '1'>
          <AccountCircle />
        </Grid>
        <Grid item xs = '11'>
          <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="username"
          value={datos.username}
          onChange={handleChange}
          autoComplete="username"
          autoFocus
          />
        </Grid>
      </Fragment>);
      login = null;
      donthave = null;
      register = 
      <Grid item xs = '6'>
        <Button
        type="submit"
        fullWidth
        color="primary"
        onClick = {handleSubmit}
        className={classes.submit}
        >
        Register
        </Button>
      </Grid>;

      nevermind =
      <Grid item xs = '6'>
        <Button
        onClick = {loginContent}
        type="submit"
        fullWidth
        color="secondary"
        className={classes.submit}
        onC
        >
        Nevermind, I have account
        </Button>
      </Grid>
  }

  

  const handleSubmit = (e) => {
    const { email, password} = datos;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs = '3'>
          </Grid>
          <Grid item xs = '1'>
            <AccountBalanceWallet/>
          </Grid>
          <Grid item xs = '6' xm = '5'>
            <Typography component="h1" variant="h5">
              Money Desk
            </Typography>
            <h5>Status: {props.loggedInStatus}</h5>
          </Grid>
          <Grid item xs = '3'>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                {content}
                <Grid item xs = '1'>
                  <Email />
                </Grid>
                <Grid item xs = '11'>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={datos.email}
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus
                  />
                </Grid>
                <Grid item xs = '1'>
                  <Lock />
                </Grid>
                <Grid item xs = '11'>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={datos.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  />
                </Grid>
                {donthave}
                {nevermind}
                {login}
                {register}
              </Grid>
            </div>
        </form>
      </div>
    </Container>
  );
}