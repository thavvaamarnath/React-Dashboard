import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import Chart from './components/Chart';
import Users from './components/Users';
import Orders from './components/Orders';
import Sales from './components/Sales';
 // Importing the Sales component

const App = () => {
  const [mode, setMode] = useState('light');
  const [page, setPage] = useState('Dashboard');

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const renderContent = () => {
    switch (page) {
      case 'Dashboard':
        return (
          <>
            <DashboardCards />
            <Chart />
          </>
        );
      case 'Users':
        return <Users />;
      case 'Orders':
        return <Orders />;
        case 'Sales':
    return <Sales />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar setPage={setPage} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Navbar mode={mode} setMode={setMode} />
          {renderContent()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
