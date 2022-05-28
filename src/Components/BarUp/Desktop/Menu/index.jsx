import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Index = () => {
  var menu = [
    { title: 'Home', link: '/' },
    { title: 'Shop', link: '/' },

    { title: 'Best Seller', link: '/' },
    { title: 'About Us', link: '/' },
  ];

  return (
    <div>
      <Box>
        <ButtonGroup variant="text" color="primary" aria-label="">
          {menu.map((item, key) => {
            return (
              <Button key={key} color="white" link={item.link}>
                <Typography fontSize={'15px'} variant={'body1'} color="white">
                  {item.title}
                </Typography>
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Index;
