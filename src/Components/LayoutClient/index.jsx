import React from 'react';
import BarUp from '../BarUp';
import Footer from '../Footer';
import Box from '@mui/material/Box';
const Index = (props) => {
  return (
    <Box>
      <Box>
        <BarUp />
      </Box>
      <Box sx={{ minHeight: '90vh' }}>{props.children}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
