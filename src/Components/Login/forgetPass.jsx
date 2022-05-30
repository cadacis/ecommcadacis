import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import { isEmail } from 'validator';
const ForgetPass = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const [email, setEmail] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    if (event.target.value === '') {
      setErrorEmail(false);
      return;
    }
    if (!isEmail(event.target.value)) {
      setErrorEmail(true);
      return;
    }
    setErrorEmail(false);
  };

  const handleClickLogin = () => {
    handleView(0);
  };

  const handleClickSendMail = () => {
    if (email === '' || errorEmail) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Box
      textAlign={'center'}
      sx={{ p: 2 }}
      minHeight={'150px'}
      minwidth={'350px'}>
      <Box>
        <Icon
          icon="fluent:inprivate-account-28-filled"
          color="#263238"
          width="60"
          height="60"
        />
      </Box>
      <Box sx={{ mt: 2 }} textAlign={'center'}>
        <TextField
          error={errorEmail}
          disabled={isLoading}
          required
          id="outlined-required"
          label="Email"
          value={email}
          size={'small'}
          onChange={handleChangeEmail}
          fullWidth
          helperText={
            'We will send an email to re-establish your account. Thank you.'
          }
        />
      </Box>

      <Box sx={{ mb: 1, mt: 3 }}>
        {' '}
        <Button
          fullWidth
          disabled={isLoading}
          onClick={handleClickSendMail}
          variant="contained"
          color="secondary">
          {!isLoading ? 'Send Email' : <CircularProgress disableShrink />}
        </Button>
      </Box>
      <Box>
        <Button
          fullWidth
          disabled={isLoading}
          onClick={handleClickLogin}
          variant="outlined"
          color="primary">
          Login
        </Button>
      </Box>
      <Collapse in={true}></Collapse>
    </Box>
  );
};

export default ForgetPass;
