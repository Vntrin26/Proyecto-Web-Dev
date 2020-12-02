import React from 'react';
import {Link, Typography} from '@material-ui/core';
import Title from './Title';
import useStyles from './InvestmentsGStyles';

function preventDefault(event) {
  event.preventDefault();
}

export default function InvestmentsG({data}) {
  const classes = useStyles();

  const money = data.reduce((a,b) => a+b, 0);
  return (
    <React.Fragment>
      <Title>Total Value of Investments</Title>
      <Typography component="p" variant="h4">
        ${money}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        1 December, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Details
        </Link>
      </div>
    </React.Fragment>
  );
}