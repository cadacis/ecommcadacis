import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';

const IsErrorServer = () => {
  return (
    <Box textAlign={'center'} sx={{ p: 2 }} minWidth={'200px'}>
      <Box>
        <Typography variant="body1" color="error">
          Error trying to get the cart. try it later
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Button variant="contained" color="secondary">
          Go Shop
        </Button>
      </Box>
    </Box>
  );
};

export default IsErrorServer;
