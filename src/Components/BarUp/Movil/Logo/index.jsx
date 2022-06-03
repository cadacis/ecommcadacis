import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Menu from '../Menu';
const Index = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <Box>
      <Box>
        <Drawer
          anchor={'left'}
          open={menuStatus}
          onClose={() => setMenuStatus(false)}>
          <Box
            sx={{
              minWidth: '20vw',
              height: '100vh',
              backgroundColor: '#37474f',
            }}>
            <Menu handleMenu={handleMenu} />
          </Box>
        </Drawer>
      </Box>
      <Box
        height={'100%'}
        justifyContent="center"
        display="flex"
        flexDirection={'column'}>
        <Button
          onClick={handleMenu}
          style={{ justifyContent: 'center', maxWidth: '20px' }}
          variant="text"
          color="default">
          <Icon icon="bx:menu" color="white" width="30" height="30" />
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
