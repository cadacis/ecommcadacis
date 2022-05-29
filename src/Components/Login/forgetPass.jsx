import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
const ForgetPass = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const [email, setEmail] = React.useState('');
  const [statusBtn, setStatusBtn] = React.useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClickLogin = () => {
    handleView(0);
  };
  const handleClickSendMail = () => {
    setStatusBtn(!statusBtn);
    handleCloseDialog();
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
          disabled={statusBtn}
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
          disabled={statusBtn}
          onClick={handleClickSendMail}
          variant="contained"
          color="secondary">
          Send Email
        </Button>
      </Box>
      <Box>
        <Button
          fullWidth
          disabled={statusBtn}
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
