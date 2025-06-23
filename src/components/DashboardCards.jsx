import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const stats = [
  { title: 'Users', value: 1200 },
  { title: 'Revenue', value: '$9,000' },
  { title: 'Orders', value: 320 }
];

const DashboardCards = () => {
  return (
    <Grid container spacing={2} p={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{stat.title}</Typography>
            <Typography variant="h4">{stat.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;