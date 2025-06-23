import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useTheme, alpha } from '@mui/material/styles';

const Chart = () => {
  const theme = useTheme();

  const stats = [
    { title: 'Revenue Growth', value: '₹1.2M', isPositive: true },
    { title: 'New Users', value: '3,245', isPositive: true },
    { title: 'Churn Rate', value: '2.1%', isPositive: false },
    { title: 'Net Profit', value: '₹850K', isPositive: true },
  ];

  return (
    <Box mt={4}>
      <Grid container spacing={2} mb={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: stat.isPositive
                  ? alpha(theme.palette.success.main, theme.palette.mode === 'light' ? 0.15 : 0.25)
                  : alpha(theme.palette.error.main, theme.palette.mode === 'light' ? 0.15 : 0.25),
              }}
            >
              {stat.isPositive ? (
                <ArrowUpward color="success" />
              ) : (
                <ArrowDownward color="error" />
              )}
              <Box ml={2}>
                <Typography variant="subtitle2">{stat.title}</Typography>
                <Typography variant="h6" color={stat.isPositive ? 'success.main' : 'error.main'}>
                  {stat.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={300}
        xAxis={[
          {
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            scaleType: 'band',
          },
        ]}
      />
    </Box>
  );
};

export default Chart;
