import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

const itemslist = [1, 2, 3];

const Items = () => {
  return (
    <Box minWidth={'200px'} sx={{ p: 1 }}>
      <Box display="flex">
        <Box sx={{ mr: 1 }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={60}
            height={60}
          />
        </Box>

        <Box width={'150px'}>
          <Skeleton height={'20px'} width="100%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton height={'20px'} width="100%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton height={'20px'} width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};

const IsLoading = () => {
  return (
    <div>
      {itemslist.map((item, key) => {
        return <Items />;
      })}
    </div>
  );
};

export default IsLoading;
