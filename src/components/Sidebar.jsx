import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  MonetizationOn as MonetizationOnIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

const Sidebar = ({ setPage }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Users', icon: <PeopleIcon /> },
    { text: 'Orders', icon: <ShoppingCartIcon /> },
    { text: 'Sales', icon: <MonetizationOnIcon /> },
  ];

  const drawerWidth = collapsed ? 60 : 200;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 0.3s',
        },
      }}
    >
      <List>
        <ListItem>
          <IconButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </ListItem>
        <Divider />
        {menuItems.map((item, index) => (
          <Tooltip
            key={index}
            title={collapsed ? item.text : ''}
            placement="right"
          >
            <ListItem button onClick={() => setPage(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
