import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const TokenReader = () => {
  // Ici, vous pourriez ajouter une logique pour laisser l'interface en attente d'authentification
  // En supposant que cette partie dépend de la lecture NFC réelle

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
        Authentifier avec votre carte NFC sur votre mobile
      </Typography>
      <CircularProgress />
      <Typography variant="body2" color="textSecondary" style={{ marginTop: 16 }}>
        Attente d'authentification...
      </Typography>
    </Box>
  );
};

export default TokenReader;
