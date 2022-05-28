import React from 'react';
import Box from '@mui/material/Box';
import Desktop from './Desktop';
import Table from './Table';
import Movil from './Movil';
import silueta from '../../mediaDev/silueta.png';
const Index = () => {
  return (
    <div>
      <Box
        sx={{ boxShadow: '2px 1px 10px 2px #888888', zIndex: 'tooltip' }}
        bgcolor={'primary.super'}>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Desktop />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
          <Desktop />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
          <Movil />
        </Box>
      </Box>
    </div>
  );
};

export default Index;
