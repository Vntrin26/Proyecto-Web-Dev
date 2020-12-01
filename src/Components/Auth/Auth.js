import React, {useState} from 'react';
import axios from "axios";
import {Button, CssBaseline, TextField, Grid, Typography, Container} from '@material-ui/core';
import {AccountBalanceWallet, Email, Lock } from '@material-ui/icons';
import useStyles from './AuthStyles'


export default function SignIn(props) {
  
  const [datos, setDatos] = useState({
    email: '',
    password: '',
    registrationErrors: '',
  });

  const classes = useStyles();

  const handleChange = (e) =>{
    e.preventDefault();
    setDatos({ ...datos, [e.target.name]: e.target.value})
  };

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
        console.log("registration res", response);
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
          </Grid>
          <Grid item xs = '3'>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
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
                <Grid item xs = '6'>
                  <Button
                  onClick = {handleSubmit}
                  type="submit"
                  fullWidth
                  color="secondary"
                  className={classes.submit}
                  >
                  Register
                  </Button>
                </Grid>
                <Grid item xs = '6'>
                  <Button
                  type="submit"
                  fullWidth
                  color="primary"
                  className={classes.submit}
                  >
                  Log In
                  </Button>
                </Grid>
              </Grid>
            </div>
        </form>
      </div>
    </Container>
  );
}