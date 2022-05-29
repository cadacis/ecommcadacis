import React from 'react';
import LogoImg from '../../../../mediaDev/logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Index = () => {
  return (
    <Box display="flex">
      <img height={'40px'} width={'40px'} alt={'logo'} src={LogoImg} />
      <Box sx={{ ml: 1 }}>
        <Box>
          <Typography
            textAlign={'left'}
            fontWeight={800}
            variant="body2"
            color="white.main">
            Shop App
          </Typography>
          <Typography fontWeight={300} variant="body1" color="white.main">
            I am React.Dev
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Index;
