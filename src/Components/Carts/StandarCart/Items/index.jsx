import React from 'react';
import Box from '@mui/material/Box';
import CartMovil from './cardMovil';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../../../../redux/actions/cart';
import { removeItem } from '../../../../redux/actions/cart';

import { useNavigate } from 'react-router-dom';

const Items = () => {
  /*   const [isLoading, setisLoading] = React.useState(true); */
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    var result = products.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    /* setProducts(result); */
    dispatch(removeItem(id));
  };
  const handleCheckout = () => {
    return;
  };
  const handleDeploy = (id) => {
    products.map((item) => {
      if (item.id == id) {
        dispatch(updateItem({ ...item, deploy: !item.deploy }));
        return;
      }
      if (item.deploy) {
        dispatch(updateItem({ ...item, deploy: false }));
      }
    });
  };

  if (products.length < 1) {
    return (
      <Box display="flex" justifyContent={'center'}>
        <Box
          sx={{
            width: { xs: '80%', sm: '400px' },
            border: '1px solid rgb(0, 0, 0, 0.4)',
            borderRadius: 2,
            p: 2,
          }}>
          <Box>
            <Typography variant="body1" color="initial">
              You do not have products in the shopping cart to add new ones, go
              to our online store. Thank you
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Button
              /*      onClick={() => navigate('/')} */
              variant="contained"
              color="secondary">
              Go Shop
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      {products.map((item) => {
        return (
          <CartMovil
            handleDeploy={handleDeploy}
            handleRemove={handleRemove}
            key={item.id}
            data={item}
          />
        );
      })}
      <Box
        sx={{
          border: '1px solid rgb(0,0,0,0.3)',
          borderRadius: 2,
          mt: 4,
          mb: 1,
        }}>
        <Box sx={{ p: 1, borderBottom: '1px solid rgb(0,0,0,0.3)' }}>
          <Grid container spacing={1}>
            <Grid textAlign={'left'} item xs={4}>
              Subtotal
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid textAlign={'end'} item xs={4}>
              {cart.subtotal}
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            p: 1,
            borderBottom: '1px solid rgb(0,0,0,0.3)',
          }}>
          <Grid container spacing={1}>
            <Grid textAlign={'left'} item xs={4}>
              Tax
            </Grid>
            <Grid item xs={4}>
              {cart.tax}
            </Grid>
            <Grid textAlign={'end'} item xs={4}>
              {cart.tax}
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            p: 1,
            color: '#ffffff',
            backgroundColor: 'gray',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Grid container spacing={1}>
            <Grid textAlign={'left'} item xs={4}>
              Total
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid textAlign={'end'} item xs={4}>
              {cart.total}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button variant="outlined" color="primary" fullWidth>
              Buy More
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={handleCheckout}
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

export default Items;
