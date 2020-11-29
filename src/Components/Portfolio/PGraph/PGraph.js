import React from 'react';
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Title from '../../Dashboard/InvestmentsG/Title';
import CropSquareIcon from '@material-ui/icons/CropSquare';


const data = [
    { name: 'Stocks', value: 50000 }, { name: 'Crypto', value: 20000 },
    { name: 'Sofipos', value: 30000 }, { name: 'CETES', value: 40000 },
    { name: 'Fintechs', value: 15000 },
  ];
  

export default function PGraph() {


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#800080'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <React.Fragment>
    <Grid container>
        <Grid item xs = {12}>
            <Title>Portfolio Summary</Title>
        </Grid>
        <Grid item xs = {8}>
            <ResponsiveContainer>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={'100%'}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Grid>
        
        <Grid item xs = {4} container>
            <Grid item xs = {4}>  
                <CropSquareIcon style={{ color: '#0088FE'}}/>
            </Grid>
            <Grid item xs = {8}>  
                <Typography>
                Stocks
                </Typography>
            </Grid>
            <Grid item xs = {4}>  
                <CropSquareIcon style={{ color: '#00C49F'}}/>
            </Grid>
            <Grid item xs = {8}>  
                <Typography>
                Crypto
                </Typography>
            </Grid>
            <Grid item xs = {4}>  
                <CropSquareIcon style={{ color: '#FFBB28'}}/>
            </Grid>
            <Grid item xs = {8}>  
                <Typography>
                Sofipos
                </Typography>
            </Grid>
            <Grid item xs = {4}>  
                <CropSquareIcon style={{ color: '#FF8042'}}/>
            </Grid>
            <Grid item xs = {8}>  
                <Typography>
                CETES
                </Typography>
            </Grid>
            <Grid item xs = {4}>  
                <CropSquareIcon style={{ color: '#800080'}}/>
            </Grid>
            <Grid item xs = {8}>  
                <Typography>
                Fintechs
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    </React.Fragment>
  );
}