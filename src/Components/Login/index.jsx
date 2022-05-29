import React from 'react';
import IsLogged from './isLogged';
import NotLogged from './notLogged';
import NotConfirmed from './notConfirmed';
import ForgetPass from './forgetPass';
import SignUp from './signUp';
const Index = (props) => {
  /*User status => [notLogged=0, logged=1, notConfirmed=2,  forget=3, SignUp=4]*/

  const [userStatus, setUserStatus] = React.useState(2);

  var handleCloseDialog = props.handleCloseDialog;

  if (userStatus === 0) {
    return (
      <NotLogged
        handleView={setUserStatus}
        handleCloseDialog={handleCloseDialog}
      />
    );
  }
  if (userStatus === 1) {
    return (
      <IsLogged
        handleView={setUserStatus}
        handleCloseDialog={handleCloseDialog}
      />
    );
  }
  if (userStatus === 2) {
    return (
      <NotConfirmed
        handleView={setUserStatus}
        handleCloseDialog={handleCloseDialog}
      />
    );
  }
  if (userStatus === 3) {
    return (
      <ForgetPass
        handleView={setUserStatus}
        handleCloseDialog={handleCloseDialog}
      />
    );
  }
  if (userStatus === 4) {
    return (
      <SignUp
        handleView={setUserStatus}
        handleCloseDialog={handleCloseDialog}
      />
    );
  }
  return <div></div>;
};

export default Index;
