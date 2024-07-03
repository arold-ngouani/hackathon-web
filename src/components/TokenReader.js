import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validateCode } from '../services/api';
import axios from 'axios';

const TokenReader = ({ onAuthenticate }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response =  await axios.post('https://hackathon-api-3cw7.onrender.com/auth/validate_code', { code });
      console.log(response.data)
      localStorage.setItem('token', response.data.access_token);
      navigate('/dashboard'); 

    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Code incorrect. Veuillez vérifier votre code.');
      } else {
        setError('Erreur lors de la validation. Veuillez réessayer.');
      }
    }

    setLoading(false);
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
      <Typography component="h1" variant="h5" gutterBottom>
        Authentifiez-vous avec votre carte NFC sur votre application mobile et saisissez votre code à 3 chiffres.
      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Code à 3 chiffres"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        disabled={loading}
        sx={{ marginTop: 4 }}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        Valider
      </Button>
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: 16 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default TokenReader;
