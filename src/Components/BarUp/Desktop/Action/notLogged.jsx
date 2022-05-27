import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

const NotLogged = () => {
  const [loginDialog, setLoginDialog] = React.useState(false);

  const handleLoginDialog = () => {
    setLoginDialog(!loginDialog);
  };

  return (
    <Box>
      <Dialog onClose={handleLoginDialog} open={loginDialog}>
        {/*Dialogo for login*/}
        <Typography variant="h1" color="initial">
          Login Form Here
        </Typography>
      </Dialog>
      <Button sx={{ borderRadius: 12 }} variant="text" color="white">
        <Icon icon="carbon:search" color="white" width="35" height="35" />
      </Button>
      <Button sx={{ borderRadius: 12 }} variant="text" color="white">
        <Badge color="secondary" badgeContent={0} showZero>
          <Icon icon="mdi-light:cart" color="white" width="35" height="35" />
        </Badge>
      </Button>
      <Button
        onClick={handleLoginDialog}
        sx={{ borderRadius: 12 }}
        variant="text"
        color="white">
        <Icon icon="carbon:login" color="white" width="35" height="35" />
      </Button>
    </Box>
  );
};

export default NotLogged;
