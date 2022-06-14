import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Index = () => {
  return (
    <Box>
      <Box>
        <Typography textAlign={'left'} variant="h5" color="#000000">
          Bienvenido Jose Test
        </Typography>
      </Box>
      <Box>
        <Typography textAlign={'left'} variant="body1" color="grayDash.main">
          Comparte tus datos y empecemos a vender mas.
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
