import React from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';
import Menu from './Menu';
import Action from './Action';

const Index = () => {
  return (
    <div>
      <Box sx={{ p: 1 }} display={'flex'}>
        <Box>
          <Logo />
        </Box>
        <Box flexGrow={1}>
          <Menu />
        </Box>
        <Box>
          <Action />
        </Box>
      </Box>
    </div>
  );
};

export default Index;
