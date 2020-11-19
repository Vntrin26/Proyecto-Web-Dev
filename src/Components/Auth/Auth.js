import React from 'react';
import {Button, CssBaseline, TextField, Grid, Typography, Container} from '@material-ui/core';
import {AccountBalanceWallet, Email, Lock } from '@material-ui/icons';
import useStyles from './AuthStyles'


export default function SignIn() {
  
  const classes = useStyles();

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
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs = '6'>
                  <Button
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