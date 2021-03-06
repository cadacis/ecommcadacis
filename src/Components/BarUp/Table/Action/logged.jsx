import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import { Icon } from '@iconify/react';
const Logged = () => {
  var userName = 'Avatar Avatar Coco';
  var avatarUser =
    'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png';
  var menuItems = [
    {
      label: 'My Account',
      link: '/myaccount',
      icon: 'fluent:inprivate-account-28-regular',
    },
    { label: 'Logout', link: '/logout', icon: 'carbon:logout' },
  ];
  const [menu, setMenu] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'cart-popover' : undefined;
  const handleCart = () => {
    setCart(!cart);
  };
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMenuClick = (link) => {
    console.log(link);
    setMenu(!menu);
  };
  const handleClickCart = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
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
          <Typography textAlign="center">Cart Commerce</Typography>
        </Box>
      </Menu>
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
        open={menu}
        onClose={handleMenu}>
        <Box sx={{ p: 1 }}>
          {menuItems.map((item, key) => {
            return (
              <Box key={key}>
                <Button
                  onClick={() => handleMenuClick(item.link)}
                  variant="text"
                  color="black">
                  <Icon icon={item.icon} color="black" width="18" height="18" />
                  <Typography
                    sx={{ ml: 1 }}
                    fontSize={'14px'}
                    variant="body1"
                    textAlign="center">
                    {item.label}
                  </Typography>
                </Button>
              </Box>
            );
          })}
        </Box>
      </Menu>
      <Button
        onClick={handleClickCart}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Badge color="secondary" badgeContent={0} showZero>
          <Icon icon="mdi-light:cart" color="white" width="25" height="25" />
        </Badge>
      </Button>
      <Button
        onClick={handleMenu}
        sx={{ borderRadius: 10 }}
        variant="text"
        color="primary">
        <Box sx={{ mt: -1, mb: -1 }} display="flex">
          <Box sx={{ mr: 1 }}>
            <Typography textAlign={'end'} variant="body1" color="primary">
              Welcome
            </Typography>
            <Typography sx={{ mt: -1 }} variant="body1" color="white.main">
              {userName}
            </Typography>
          </Box>
          <Avatar alt={userName} src={avatarUser} />
        </Box>
      </Button>
    </Box>
  );
};

export default Logged;
