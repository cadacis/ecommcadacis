import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import pagesMenu from '../../pages';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Index = (props) => {
  var handleMenu = props.handleMenu;
  var navigate = useNavigate();
  return (
    <div>
      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent={'center'}
        height={'100%'}
        sx={{ mt: 2 }}>
        <ButtonGroup
          orientation="vertical"
          variant="text"
          color="primary"
          aria-label="">
          {pagesMenu.map((item, key) => {
            return (
              <Button
                onClick={() => {
                  handleMenu();
                  navigate(item.link);
                }}
                key={key}
                color="white"
                link={item.link}>
                <Box>
                  <Box>
                    <Icon
                      icon={item.icon}
                      color="white"
                      width="20"
                      height="20"
                    />
                  </Box>
                  <Box>
                    <Typography
                      fontSize={'10px'}
                      variant={'body1'}
                      color="white">
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Index;
