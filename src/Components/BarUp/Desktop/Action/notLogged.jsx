import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Login from '../../../Login';
import Cart from '../../../Carts/Movile';
import { useSelector } from 'react-redux';
const NotLogged = () => {
  const totalItemCart = useSelector((state) => {
    var total = 0;
    state.cart.items.map((item) => {
      total = total + item.count;
    });
    return total;
  });
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
    if (totalItemCart === 0) {
      return;
    }
    setCart(!cart);
  };
  return (
    <Box
      display={'flex'}
      justifyContent="center"
      justifyItems={'center'}
      height="100%">
      {/*Cuadro de login*/}
      <Dialog onClose={handleLoginDialog} open={loginDialog}>
        {/*Dialogo for login*/}
        <Login handleCloseDialog={handleLoginDialog} />
      </Dialog>
      {/*Cuadro de Busqueda*/}
      {/*   <Dialog onClose={handleSearchDialog} open={searchDialog}>

        <Typography variant="h1" color="initial">
          Search Here
        </Typography>
      </Dialog> */}
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
          <Cart handleCart={handleCart} />
        </Box>
      </Menu>

      {/*   <Button
        onClick={handleSearchDialog}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Icon icon="carbon:search" color="white" width="30" height="30" />
      </Button> */}
      <Button
        onClick={handleCart}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Badge color="secondary" badgeContent={totalItemCart} showZero>
          <Icon icon="mdi-light:cart" color="white" width="30" height="30" />
        </Badge>
      </Button>
      <Button
        onClick={handleLoginDialog}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Icon icon="carbon:login" color="white" width="30" height="30" />
      </Button>
    </Box>
  );
};

export default NotLogged;
