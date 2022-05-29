import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
const SignUp = (props) => {
  const handleView = props.handleView;
  const handleCloseDialog = props.handleCloseDialog;
  const [data, setData] = React.useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    rePassword: '',
    errorFirstName: false,
    errorSecondName: false,
    errorEmail: false,
    errorPassword: false,
    errorRePassword: false,
    showPassword: false,
  });

  const handleChangeFirstName = () => {};
  const handleChangeSecondName = () => {};
  const handleChangeEmail = () => {};
  const handleChangePassword = () => {};
  const handleChangeRePassword = () => {};
  const handleShowPassword = () => {};
  const handleClickLogin = () => {
    handleView(0);
  };
  const handleClickSignUp = () => {};
  const handleClickForget = () => {
    handleView(3);
  };

  return (
    <Box
      textAlign={'center'}
      sx={{ p: 1 }}
      minHeight={'250px'}
      minWidth={'300px'}>
      <Box>
        <TextField
          helperText={data.errorFirstName ? 'Invalid Name Format' : ''}
          error={data.errorFirstName}
          required
          id="outlined-required"
          label="First Name"
          value={data.firstName}
          size={'small'}
          onChange={handleChangeFirstName}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          helperText={data.errorSecondName ? 'Invalid Name Format' : ''}
          error={data.errorSecondName}
          required
          id="outlined-required"
          label="Second Name"
          value={data.secondName}
          size={'small'}
          onChange={handleChangeSecondName}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          helperText={data.errorEmail ? 'Invalid Name Format' : ''}
          error={data.errorEmail}
          required
          id="outlined-required"
          label="Email"
          value={data.email}
          size={'small'}
          onChange={handleChangeEmail}
          fullWidth
        />
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box sx={{ mt: 1 }}>
        <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
          <InputLabel sx={{ mt: -1 }} htmlFor="outlined-adornment-password">
            Password
          </InputLabel>

          <OutlinedInput
            error={data.errorPassword}
            helperText={data.errorPassword ? 'Invalid Password Format' : ''}
            fullWidth
            size="small"
            id="outlined-adornment-password"
            type={data.showPassword ? 'text' : 'password'}
            value={data.password}
            onChange={handleChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={handleShowPassword}
                  variant="text"
                  color="default">
                  {data.showpassword ? (
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

      <Box sx={{ mt: 1 }}>
        <TextField
          type={data.showPassword ? 'text' : 'password'}
          helperText={data.errorRePassword ? 'Invalid Name Format' : ''}
          error={data.errorRePassword}
          required
          id="outlined-required"
          label="Repeat Password"
          value={data.rePassword}
          size={'small'}
          onChange={handleChangeRePassword}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          fullWidth
          onClick={handleClickSignUp}
          variant="contained"
          color={'secondary'}>
          Sign Up
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
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
              fullWidth
              onClick={handleClickLogin}
              variant="outlined"
              color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
