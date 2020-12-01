import React from 'react';
import {Link, Typography} from '@material-ui/core';
import Title from '../InvestmentsG/Title';
import useStyles from './BudgetGStyles';

function preventDefault(event) {
  event.preventDefault();
}

export default function BudgetG() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>2022 Savings Prediction</Title>
      <Typography component="p" variant="h4">
        $96,000
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        if you continue saving $#### each month you will reach by 2022
      </Typography>
    </React.Fragment>
  );
}