import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';

const IsEmpty = () => {
  return (
    <Box textAlign={'center'} sx={{ p: 2 }} minWidth={'200px'}>
      <Box>
        <Typography variant="body1" color="initial">
          The cart is empty
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

export default IsEmpty;
