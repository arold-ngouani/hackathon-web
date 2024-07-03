import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
//import { BrowserRouter as Router } from 'react-router-dom';
//import TokenReader from './components/TokenReader';
//import Dashboard from './components/Dashboard';
import { getCurrentUser, logout } from './services/auth';
import AppRoutes from './Route';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  const handleAuthenticate = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NFC Authentication App
          </Typography>
          {user && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AppRoutes user={user} onAuthenticate={handleAuthenticate} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
