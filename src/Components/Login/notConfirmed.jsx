import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const NotConfirmed = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const handleLoginBtn = () => {
    handleView(0);
  };
  const handleOkBtn = () => {
    handleCloseDialog();
  };
  return (
    <Box
      textAlign={'center'}
      sx={{ p: 2 }}
      minHeight={'100px'}
      minWidth={'50px'}>
      <Box>
        <Icon
          icon="dashicons:email-alt2"
          color="#263238"
          width="50"
          height="50"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" color="primary">
          We found a user that corresponds to your email but it has not been
          confirmed. Do you want us to resend you a confirmation email ?
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          onClick={handleLoginBtn}
          sx={{ mr: 3 }}
          variant="outlined"
          color="primary">
          Login
        </Button>
        <Button onClick={handleOkBtn} variant="contained" color="primary">
          Ok
        </Button>
      </Box>
    </Box>
  );
};

export default NotConfirmed;
