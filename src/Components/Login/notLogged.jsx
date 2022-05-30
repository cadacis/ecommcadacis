import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { isEmail, isStrongPassword } from 'validator';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const NotLogged = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const [isLoading, setIsLoading] = React.useState(false);
  const [isErrorEmail, setIsErrorEmail] = React.useState(false);
  const [isErrorPass, setIsErrorPass] = React.useState(false);
  const [passValues, setPassValues] = React.useState({
    amount: '',
    password: '',
    email: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleIsLoading = () => {
    setIsLoading(!isLoading);
  };
  const handleChange = (event) => {
    setPassValues({ ...passValues, password: event.target.value });
    if (event.target.value === '') {
      setIsErrorPass(false);
      return;
    }
    if (!isStrongPassword(event.target.value)) {
      setIsErrorPass(true);
      return;
    }
    setIsErrorPass(false);
  };
  const handleChangeEmail = (event) => {
    setPassValues({ ...passValues, email: event.target.value });
    if (event.target.value === '') {
      setIsErrorEmail(false);
      return;
    }
    if (!isEmail(event.target.value)) {
      setIsErrorEmail(true);
      return;
    }
    setIsErrorEmail(false);
  };
  const handleShowPass = (event) => {
    setPassValues({ ...passValues, showPassword: !passValues.showPassword });
  };
  const handleClickForget = () => {
    handleView(3);
    /*  handleCloseDialog(); */
  };

  const handleClickSignUp = () => {
    handleView(4);
    /*  handleCloseDialog(); */
  };

  const handleClickLogin = () => {
    if (
      passValues.email === '' ||
      passValues.password === '' ||
      passValues.isErrorEmail ||
      passValues.isErrorPass
    ) {
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
      sx={{ p: 1 }}
      minHeight={'250px'}
      minWidth={'50px'}>
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
          disabled={isLoading}
          helperText={isErrorEmail ? 'Invalid Email Format' : ''}
          error={isErrorEmail}
          required
          id="outlined-required"
          label="Email"
          value={passValues.email}
          size={'small'}
          onChange={handleChangeEmail}
          fullWidth
        />
      </Box>
      <Box textAlign={'center'}>
        <FormControl
          disabled={isLoading}
          sx={{ mt: 2, width: '100%' }}
          variant="outlined">
          <InputLabel sx={{ mt: -1 }} htmlFor="outlined-adornment-password">
            Password
          </InputLabel>

          <OutlinedInput
            error={isErrorPass}
            helperText={isErrorPass ? 'Invalid Password Format' : ''}
            fullWidth
            size="small"
            id="outlined-adornment-password"
            type={passValues.showPassword ? 'text' : 'password'}
            value={passValues.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={handleShowPass}
                  disabled={isLoading}
                  variant="text"
                  color="default">
                  {passValues.showPassword ? (
                    <Icon
                      icon="entypo:eye"
                      color="#263238"
                      width="20"
                      height="20"
                    />
                  ) : (
                    <Icon
                      icon="entypo:eye-with-line"
                      color="#263238"
                      width="20"
                      height="20"
                    />
                  )}
                </Button>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          disabled={isLoading}
          fullWidth
          onClick={handleClickLogin}
          variant="contained"
          color="secondary">
          {!isLoading ? 'Login' : <CircularProgress disableShrink />}
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              disabled={isLoading}
              fullWidth
              onClick={handleClickForget}
              sx={{ mr: 2 }}
              variant="outlined"
              color="primary">
              Forget
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              disabled={isLoading}
              fullWidth
              onClick={handleClickSignUp}
              variant="outlined"
              color={'primary'}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NotLogged;
