import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

const NotLogged = () => {
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [searchDialog, setSearchDialog] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const handleLoginDialog = () => {
    setLoginDialog(!loginDialog);
  };
  const handleSearchDialog = () => {
    setSearchDialog(!searchDialog);
  };

  const handleCart = () => {
    setCart(!cart);
  };
  return (
    <Box>
      {/*Cuadro de login*/}
      <Dialog onClose={handleLoginDialog} open={loginDialog}>
        {/*Dialogo for login*/}
        <Typography variant="h1" color="initial">
          Login Form Here
        </Typography>
      </Dialog>
      {/*Cuadro de Busqueda*/}
      <Dialog onClose={handleSearchDialog} open={searchDialog}>
        {/*Dialogo for login*/}
        <Typography variant="h1" color="initial">
          Search Here
        </Typography>
      </Dialog>
      {/*Cuadro de Carrito*/}
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        /*  anchorEl={cart} */
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={cart}
        onClose={handleCart}>
        <Box>
          {' '}
          <Typography textAlign="center">Cart Commerce</Typography>
        </Box>
      </Menu>

      <Button
        onClick={handleSearchDialog}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Icon icon="carbon:search" color="white" width="25" height="25" />
      </Button>
      <Button
        onClick={handleCart}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Badge color="secondary" badgeContent={0} showZero>
          <Icon icon="mdi-light:cart" color="white" width="25" height="25" />
        </Badge>
      </Button>
      <Button
        onClick={handleLoginDialog}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Icon icon="carbon:login" color="white" width="25" height="25" />
      </Button>
    </Box>
  );
};

export default NotLogged;
