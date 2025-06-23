import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const salesData = [
  { product: 'Product A', sales: 1500 },
  { product: 'Product B', sales: 900 },
  { product: 'Product C', sales: 1200 },
  { product: 'Product D', sales: 600 },
];

const Sales = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Sales Overview
      </Typography>
      <Grid container spacing={2}>
        {salesData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="subtitle1">{item.product}</Typography>
              <Typography variant="h6">${item.sales}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sales;
