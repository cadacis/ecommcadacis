import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import IsEmpty from './isEmpty';
import IsLoading from './isLoading';
import IsErrorServer from './isErrorServer';
import IsItems from './isItems';
const Index = () => {
  const [carts, setCarts] = React.useState();
  const [isStatus, setStatus] = React.useState(2);
  /*0=isLoading, 1 = isErrorServer, 2 = isItems, default = isEmpty*/

  if (isStatus === 0) {
    return <IsLoading />;
  }

  if (isStatus === 1) {
    return <IsErrorServer />;
  }

  if (isStatus === 2) {
    return <IsItems />;
  }
  /*Return Default*/
  return <IsEmpty />;
};

export default Index;
