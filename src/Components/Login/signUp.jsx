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
import { isAlpha, isEmail, isStrongPassword } from 'validator';
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

  const handleChangeFirstName = (e) => {
    if (e.target.value == '') {
      setData({ ...data, firstName: '', errorFirstName: false });
      return;
    }

    if (!isAlpha(e.target.value, ['en-US'], { ignore: ' ' })) {
      setData({ ...data, firstName: e.target.value, errorFirstName: true });
      return;
    }

    setData({ ...data, errorFirstName: false, firstName: e.target.value });

    /*  setData({ ...data, errorFirstName: false }); */
  };

  const handleChangeSecondName = (e) => {
    if (e.target.value == '') {
      setData({ ...data, secondName: '', errorSecondName: false });
      return;
    }

    if (!isAlpha(e.target.value, ['en-US'], { ignore: ' ' })) {
      setData({ ...data, secondName: e.target.value, errorSecondName: true });
      return;
    }

    setData({ ...data, errorSecondName: false, secondName: e.target.value });
  };

  const handleChangeEmail = (e) => {
    if (e.target.value == '') {
      setData({ ...data, email: '', errorEmail: false });
      return;
    }
    if (!isEmail(e.target.value)) {
      setData({ ...data, email: e.target.value, errorEmail: true });
      return;
    }
    setData({ ...data, errorEmail: false, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    if (e.target.value == '') {
      setData({ ...data, password: '', errorPassword: false });
      return;
    }
    if (!isStrongPassword(e.target.value)) {
      setData({ ...data, password: e.target.value, errorPassword: true });
      return;
    }
    setData({ ...data, errorPassword: false, password: e.target.value });
  };

  const handleChangeRePassword = (e) => {
    if (e.target.value == '') {
      setData({ ...data, rePassword: '', errorRePassword: false });
      return;
    }
    if (data.password !== e.target.value) {
      setData({ ...data, errorRePassword: true, rePassword: e.target.value });
      return;
    }
    setData({ ...data, rePassword: e.target.value, errorRePassword: false });
  };

  const handleShowPassword = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const handleClickLogin = () => {
    handleView(0);
  };

  const handleClickSignUp = () => {
    if (
      data.firstName === '' ||
      data.secondName === '' ||
      data.email === '' ||
      data.password === '' ||
      data.rePassword === '' ||
      data.errorFirstName ||
      data.errorSecondName ||
      data.errorEmail ||
      data.errorPassword ||
      data.errorRePassword
    ) {
      return;
    }

    /*Accion de registro aqui*/

    handleCloseDialog();
  };
  const handleClickForget = () => {
    handleView(3);
  };

  return (
    <Box
      textAlign={'center'}
      sx={{ p: 1, pt: 2, pb: 2 }}
      minHeight={'250px'}
      minWidth={'200px'}>
      <Box>
        <TextField
          helperText={data.errorFirstName ? 'Invalid Name Format' : ''}
          error={data.errorFirstName}
          required
          id="fname"
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
          id="sname"
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
          id="email"
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
                  {data.showPassword ? (
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
          helperText={data.errorRePassword ? 'Passwords not Match' : ''}
          error={data.errorRePassword}
          required
          id="rePass"
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
