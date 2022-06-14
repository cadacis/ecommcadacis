import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const items = [
  { name: 'Dashboard', icon: 'iwwa:dashboard', link: '/dashboard' },
  { name: 'Menu', icon: 'bi:menu-button-wide', link: '/dashboard' },
  { name: 'Charts', icon: 'ep:trend-charts', link: '/dashboard' },
  { name: 'Example', icon: 'arcticons:ojo', link: '/dashboard' },
];

const Item = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.link);
    props.handleMenu();
  };
  return (
    <Box sx={{ p: 1 }}>
      <Button
        fullWidth
        onClick={handleClick}
        display="block"
        variant="text"
        color="primary">
        <Box display="flex" justifyContent={'center'}>
          <Icon icon={props.icon} color="#003" width="40" height="40" />
        </Box>
      </Button>
      <Box sx={{ ml: 1 }} display="flex" justifyContent={'center'}>
        {props.name}
      </Box>
    </Box>
  );
};
const Index = (props) => {
  return (
    <Box>
      {items.map((item, key) => {
        return (
          <Item
            name={item.name}
            icon={item.icon}
            link={item.link}
            handleMenu={props.handleMenu}
          />
        );
      })}
    </Box>
  );
};

export default Index;
