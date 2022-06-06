import React from 'react';
import Box from '@mui/material/Box';
import Items from './Items';
import Grid from '@mui/material/Grid';
import Checkout from '../../Checkout';

const Index = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 1 }}>
            <Items />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 1 }}>
            <Checkout />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
