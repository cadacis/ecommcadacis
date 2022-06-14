import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import IsLoading from './isLoading';
import IsEmpty from './isEmpty';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../../redux/actions/cart';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  var data = props.data;
  var total = props.total - 1;
  var num = props.num;
  const handleRemove = props.handleRemove;
  return (
    <Box sx={{ mt: 0.5, mb: 0.5 }}>
      <Box display="flex">
        <Box>
          <img width="50px" height={'50px'} src={data.image} alt={data.title} />
        </Box>
        <Box sx={{ ml: 1 }} flexGrow={1}>
          <Typography fontSize={'14px'} variant="body1" color="initial">
            {data.title.substr(0, 20) + '...'}
          </Typography>
          <Typography fontSize={'14px'} variant="body1" color="initial">
            {data.description.substr(0, 15) + '...'}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}>
          <Typography variant="body1" color="secondary">
            {'x' + data.count}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}>
          <Button
            onClick={() => handleRemove(data.id)}
            variant="text"
            color="primary">
            <Icon icon="ep:close" color="#263238" width="25" height="25" />
          </Button>
        </Box>
      </Box>
      {total == num ? '' : <Divider />}
    </Box>
  );
};

const IsItems = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  /*const handleCart = (handleCart = { handleCart });*/
  const handleRemove = (id) => {
    if (products.length == 1) {
      props.handleCart();
    }
    setTimeout(() => {
      dispatch(removeItem(id));
    }, 50);
  };

  if (products.length == 0) {
    return (
      <Box sx={{ p: 1 }}>
        <IsLoading />
        <Box sx={{ mt: 1 }} textAlign={'center'}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                onClick={() => navigate('/cart')}
                disabled
                fullWidth
                variant="outlined"
                color="primary">
                Cart
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => navigate('/cart')}
                disabled
                fullWidth
                variant="contained"
                color="secondary">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth: { xs: '300px', sm: '350px' }, p: 1 }}>
      <Box sx={{ p: 1 }}>
        {products.map((item, key) => {
          return (
            <Item
              handleRemove={handleRemove}
              handleCart={props.handleCart}
              key={key}
              num={key}
              total={products.length}
              data={item}
            />
          );
        })}
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box>
        <Box sx={{ mt: 0.5 }} display={'flex'}>
          <Box>Subtotal</Box>
          <Box flexGrow={1}></Box>
          <Box>$10</Box>
        </Box>
        <Box sx={{ mt: 0.5 }} display={'flex'}>
          <Box>Taxes</Box>
          <Box flexGrow={1}></Box>
          <Box>$0.50</Box>
        </Box>
        <Box sx={{ mt: 0.5 }} display={'flex'}>
          <Box>
            <strong>Total</strong>
          </Box>
          <Box flexGrow={1}></Box>
          <Box>
            <strong>$40</strong>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box sx={{ mt: 2 }} textAlign={'center'}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                navigate('/cart');
                props.handleCart();
              }}
              fullWidth
              variant="outlined"
              color="primary">
              Cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                navigate('/cart');
                props.handleCart();
              }}
              fullWidth
              variant="contained"
              color="secondary">
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IsItems;
