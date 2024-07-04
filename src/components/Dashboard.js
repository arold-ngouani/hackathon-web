import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Paper, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from '../services/auth';  // Assurez-vous d'importer correctement la fonction logout depuis votre service d'authentification
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard =  () => {
    const [userData, setUserData] = useState({});
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token)
    useEffect(() =>{

      const chargerDonnees = async () => {
        try {
          const response = await axios.get('https://hackathon-api-3cw7.onrender.com/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        setUserData(response.data)
    
        } catch (error) {
          if (error.response && error.response.status === 401) {
            navigate('/'); 
          } else {
            console.log('Erreur lors de la validation. Veuillez réessayer.');
          }
        }
      }
      chargerDonnees()
    },[])
    if (!token) {
      navigate('/')
      return;
    }
    
  const handleLogout = () => {
    logout();  // Appel à la fonction logout pour déconnecter l'utilisateur
    window.location.href = '/';  // Redirection vers la page de connexion après la déconnexion
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper 
        elevation={3} 
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Avatar 
          sx={{ 
            m: 'auto',  // Centrer l'avatar horizontalement
            bgcolor: 'secondary.main', 
            width: 56, 
            height: 56 
          }}
        >
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="h6" gutterBottom>
          Here you can manage your account and view your details.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Name :</strong> {userData.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> {userData.email}
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout}  // Appel de la fonction handleLogout lors du clic sur le bouton
          sx={{ marginTop: 2 }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;