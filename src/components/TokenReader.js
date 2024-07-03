import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { validateCode } from '../services/api';
import axios from 'axios';

const TokenReader = ({ onAuthenticate }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      console.log(code)
      const response =  await axios.post('https://hackathon-api-3cw7.onrender.com/auth/read_nfc', {code});
      console.log(response.data)

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
      Authentifier vous avec votre carte NFC sur votre application mobile et saisissez votre code a 3 chiffres.

      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Code à 3 chiffres"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        sx={{ marginTop: 4 }}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
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
