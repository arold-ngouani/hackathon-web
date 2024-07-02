import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const TokenReader = ({ onAuthenticate }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://hackathon-api-3cw7.onrender.com/auth/validate_code', { code });
      const user = response.data; // Supposons que l'API retourne les informations de l'utilisateur
      onAuthenticate(user);
    } catch (error) {
      setError('Invalid code. Please try again.');
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
        Authentifier avec votre carte NFC sur votre mobile et saisissez votre code a 3 chiffres.
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