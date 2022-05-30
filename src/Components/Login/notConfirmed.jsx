import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const NotConfirmed = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const [isLoading, setIsLoading] = React.useState(false);

  const handleIsLoading = () => {
    setIsLoading(!isLoading);
  };
  const handleLoginBtn = () => {
    handleView(0);
  };
  const handleOkBtn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <Box
      textAlign={'center'}
      sx={{ p: 2 }}
      minHeight={'100px'}
      minWidth={'50px'}>
      <Box>
        {!isLoading ? (
          <Icon
            icon="dashicons:email-alt2"
            color="#263238"
            width="50"
            height="50"
          />
        ) : (
          <CircularProgress disableShrink />
        )}
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" color="primary">
          We found a user that corresponds to your email but it has not been
          confirmed. Do you want us to resend you a confirmation email ?
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          disabled={isLoading}
          onClick={handleLoginBtn}
          sx={{ mr: 3 }}
          variant="outlined"
          color="primary">
          Login
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleOkBtn}
          variant="contained"
          color="primary">
          Ok
        </Button>
      </Box>
    </Box>
  );
};

export default NotConfirmed;
