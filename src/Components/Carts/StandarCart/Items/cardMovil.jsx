import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const CardMovil = (props) => {
  var data = props.data;
  const [statusDeploy, setStatusDeploy] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const handleDeploy = () => {
    setStatusDeploy(!statusDeploy);
  };
  const handleMore = () => {
    setCount(count + 1);
  };
  const handleLess = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const handleRemove = () => {
    props.handleRemove(data.id);
  };

  return (
    <Box
      sx={{
        border: '1px solid rgb(0, 0, 0, 0.4)',
        borderRadius: 2,

        mt: 0.5,
      }}>
      <Box sx={{ mt: 0, width: '100%' }}>
        <Box
          sx={{
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
            backgroundColor: statusDeploy ? '#009688' : ' rgb(0, 0, 0, 0)',
          }}
          display="flex">
          <Box textAlign={'left'}>
            <Button
              onClick={handleDeploy}
              sx={{ borderRadius: 10, ml: -2 }}
              variant="text"
              color="primary">
              {!statusDeploy ? (
                <Icon icon="bi:arrow-down-circle" width="25" height="25" />
              ) : (
                <Icon
                  icon="bi:arrow-down-circle-fill"
                  color="#ffffff"
                  width="25"
                  height="25"
                  rotate={2}
                />
              )}
            </Button>
          </Box>
          <Box
            display={'flex'}
            flexDirection="column"
            justifyContent={'center'}
            flexGrow={1}>
            <Typography
              sx={{ color: statusDeploy ? '#ffffff' : '#000000' }}
              textAlign={'left'}
              variant="body1">
              {data.title.substr(0, 18) + '...'}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            flexDirection="column"
            justifyContent={'center'}
            sx={{ mr: 0.5 }}>
            <Typography
              variant="body1"
              sx={{ color: statusDeploy ? '#ffffff' : '#000000' }}
              color="white.main">
              <strong> {'$' + data.price}</strong>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: statusDeploy ? 'block' : 'none', p: 1 }}>
        <Box display="flex">
          <Box>
            <Box sx={{ width: '60px' }}>
              <img width="100%" src={data.image} alt={data.title} />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flexGrow={1}
            sx={{ ml: 1 }}>
            <Box>
              <Typography variant="h6" color="initial">
                {data.title}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography textAlign={'justify'} variant="body1" color="initial">
            {data.description}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box>
                    <Button onClick={handleLess} variant="text" color="primary">
                      <Icon
                        icon="ic:outline-less-than"
                        color="#37474f"
                        width="25"
                        height="25"
                      />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{ ml: 2.9, mt: 0.8 }}
                    display={'flex'}
                    flexDirection="column"
                    justifyContent={'center'}>
                    <Typography variant="body1" color="secondary">
                      <strong>{count}</strong>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Button onClick={handleMore} variant="text" color="primary">
                      <Icon
                        icon="ic:outline-less-than"
                        color="#37474f"
                        width="25"
                        height="25"
                        rotate={2}
                      />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleRemove}
                fullWidth
                variant="contained"
                color="secondary">
                Remove
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CardMovil;
