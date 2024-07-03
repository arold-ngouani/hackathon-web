import React from 'react';
import { Typography, Button } from '@mui/material';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div>
      <Typography variant="h4">Welcome {user.name}</Typography>
      <Button variant="contained" color="secondary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
