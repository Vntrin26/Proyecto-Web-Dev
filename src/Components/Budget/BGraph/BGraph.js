import React, {Fragment} from 'react';
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import Title from '../../Dashboard/InvestmentsG/Title';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '', expenses: 27000, income: 35000,
  },
];
  

export default function BGraph() {

return (
    <Fragment>
        <Grid container>
            <Grid item xs = {12}>
                <Title>Budget Summary</Title>
            </Grid>
            <Grid item xs = {12}>
                <BarChart
                   width={500}
                   height={150}
                   data={data}
                   layout = 'vertical'
                    >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey = 'name'/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#0088FE" />
                    <Bar dataKey="expenses" fill="#FF0000" />
                 </BarChart>
            </Grid>
        </Grid>
    </Fragment>
  );
}