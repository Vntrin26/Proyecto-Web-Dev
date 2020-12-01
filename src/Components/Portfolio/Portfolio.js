import React from 'react';
import clsx from 'clsx';
import useStyles from '../Dashboard/DashboardStyles.js';
import { CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, Button, TextField} from '@material-ui/core';
import { MenuOutlined, ChevronLeft } from '@material-ui/icons';
import { glistItems } from '../Dashboard/ListItems/listItems';
import InvestmentsG from '../Dashboard/InvestmentsG/InvestmentsG'
import BudgetG from '../Dashboard/BudgetG/BudgetG'
import PGraph from './PGraph/PGraph';
import InvestmentTable from './InvestmentTable';


export default function Portfolio() {
  const classes = useStyles();
  const [extend, setExtend] = React.useState(true);
  const handleDrawerExtend = () => {
    setExtend(true);
  };
  const handleDrawerShrink = () => {
    setExtend(false);
  };
  //combination of both styles
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  let data = 
    [
      { id: 1, description: 'TSLA', amount: 21, gain: '40,000', type: 'Option' },
      { id: 2, description: 'Lytecoin', amount: 19, gain: '0', type: 'Crypto' },
      { id: 3, description: 'Oranges', amount: 16, gain: '50,000', type: 'Futures' },
      { id: 4, description: 'SPY', amount: 25, gain: '2,000,000', type: 'Puts' },
    ]
  

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
            Portfolio
              </Typography>
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
        <List>{glistItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper}>
                <PGraph />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <InvestmentsG />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <table id='Portfolio'>
                  <tbody>
                    <tr>
                      <td>Description</td>
                      <td>Amount</td>
                      <td>Gain</td>
                      <td>Type</td>
                    </tr>
                    {
                      data.map((investment) => {
                        var fixedInvestment = Object.values(investment);
                        console.log(fixedInvestment)
                        return <InvestmentTable id = {fixedInvestment} description ={fixedInvestment[1]}  amount={fixedInvestment[2]} gain={fixedInvestment[3]} type={fixedInvestment[4]} />
                      })}
                  </tbody>
                </table>

              </Paper>
            </Grid>
            <Grid container item xs={12} md={6} lg={6} spacing={1}>
                <Grid item xs = {3}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="investment"
                  label="description"
                  id="investment"
                  />
                </Grid>
                <Grid item xs = {3}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="investment"
                  label="category"
                  id="investment"
                  />
                </Grid>
                <Grid item xs = {3}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="investment"
                  label="quantity"
                  id="investment"
                  />
                </Grid>
                <Grid item xs = {3}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="investment"
                  label="yield"
                  id="investment"
                  />
                </Grid>
                <Grid item xs = {6}>
                  <Button
                  fullWidth
                  variant='contained'
                  color= 'secondary'
                  >
                    Add Investment
                  </Button>
                </Grid>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
}