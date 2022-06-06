import React from 'react';
import BarUp from '../BarUp';
import Footer from '../Footer';
import Box from '@mui/material/Box';
const Index = (props) => {
  return (
    <Box>
      <Box sx={{ position: 'fixed', top: 0, width: '100vw', zIndex: '1000' }}>
        <BarUp />
      </Box>
      <Box sx={{ minHeight: '90vh', mt: '60px' }}>{props.children}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
