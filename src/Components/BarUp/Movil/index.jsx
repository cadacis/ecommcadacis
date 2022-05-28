import React from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';

import Action from './Action';

const Index = () => {
  return (
    <div>
      <Box sx={{ p: 0.5 }} display={'flex'}>
        <Box textAlign={'left'} flexGrow={1}>
          <Logo />
        </Box>

        <Box>
          <Action />
        </Box>
      </Box>
    </div>
  );
};

export default Index;
