import React from 'react';
import LogoImg from '../../../../mediaDev/logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Index = () => {
  return (
    <Box display="flex">
      <img width={'45px'} alt={'logo'} src={LogoImg} />
      <Box>
        <Box sx={{ pt: 1 }}>
          <Typography
            fontSize="16px"
            fontWeight={800}
            variant="body2"
            color="white.main">
            Shop App
          </Typography>
          <Typography
            fontWeight={300}
            sx={{ mt: -0.5 }}
            variant="body1"
            color="white.main">
            I am React.Dev
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Index;
