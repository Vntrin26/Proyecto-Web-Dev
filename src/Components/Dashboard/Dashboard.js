import React, {useState} from 'react';
import clsx from 'clsx';
import useStyles from './DashboardStyles.js';
import {Button, CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link} from '@material-ui/core';
import {MenuOutlined, ChevronLeft} from '@material-ui/icons';
import GlistItems from './ListItems/listItems';
import InvestmentsG from './InvestmentsG/InvestmentsG'
import BudgetG from './BudgetG/BudgetG'
import PGraph from '../Portfolio/PGraph/PGraph';
import BGraph from '../Budget/BGraph/BGraph';
import axios from "axios";
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import runtimeEnv from '@mars/heroku-js-runtime-env'


export default function Dashboard(props) {
    const classes = useStyles();
    const [extend, setExtend] = React.useState(true);
    const handleDrawerExtend = () => {
        setExtend(true);
    };
    const handleDrawerShrink = () => {
        setExtend(false);
    };

    let history = useHistory();


  const [portfolio, setPortfolio] = useState([])

  const [money, setmoney] = useState([])
  
  const [graphData, setgraphData] = useState([])

  const handleLogoutClick = (e) => {
    const url = runtimeEnv().REACT_APP_API_URL;
    axios
      .delete(url+"logout", { withCredentials: true })
      .then(response => {
        history.push("/");
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

    //combination of both styles
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(()=>{getInfo(setPortfolio, setgraphData, setmoney)}, [])

    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, extend && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerExtend}
                className={clsx(classes.menuButton, extend && classes.menuButtonHidden)}
              >
                <MenuOutlined />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dashboard
              </Typography>
              <Button
              onClick = {handleLogoutClick}
              className = {classes.button}
              variant='contained'
              color="danger"
              >Log out</Button>
              <h5>Status: {props.loggedInStatus}</h5>
              <IconButton color="inherit">
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !extend && classes.drawerPaperClose),
            }}
            extend={extend}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerShrink}>
                <ChevronLeft />
              </IconButton>
            </div>
            <Divider />
            <List>
              <GlistItems/>
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={8}>
                  <Paper className={fixedHeightPaper}>
                    <PGraph dat = {graphData} /> 
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    <InvestmentsG data = {money}/>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={fixedHeightPaper}>
                    <BGraph />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={fixedHeightPaper}>
                    <BudgetG />
                  </Paper>
                </Grid>
              </Grid>
              <Box pt={4}>
              </Box>
            </Container>
          </main>
        </div>
    );
}

const getInfo = (setPortfolio, setgraphData, setmoney) => {
  const url = runtimeEnv().REACT_APP_API_URL;
  axios
      .get(
        url+"/investments",
        {
          
        },
        /* { withCredentials: true } */
      )
      .then(response => {
        setPortfolio(response.data);

        let dataArray = [];
        let amountArray = [];

        for (let i = 0; i < response.data.length; i++) {
          let obj = {name: response.data[i].category, value: response.data[i].amount}
          let amount = response.data[i].amount;
          dataArray.push(obj); 
          amountArray.push(amount);
          console.log(dataArray);
        }
        setgraphData(dataArray);
        setmoney(amountArray);
        /* if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data);
        } */
      })
      .catch(error => {
        console.log("registration error", error);
      });
  }