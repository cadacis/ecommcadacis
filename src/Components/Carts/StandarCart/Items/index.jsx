import React from 'react';
import Box from '@mui/material/Box';
import CartMovil from './cardMovil';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

/* import { useNavigate } from 'react-router-dom'; */
const Items = () => {
  /*   const navigate = useNavigate(); */
  const [products, setProducts] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  const getProduct = async () => {
    var fetch = await axios.get('https://fakestoreapi.com/products');
    setProducts(fetch.data.splice(1, 8));
    setisLoading(false);
  };
  const handleRemove = (id) => {
    var result = products.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    setProducts(result);
  };
  const handleCheckout = () => {
    return;
  };
  React.useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent={'center'}>
        <Box
          sx={{
            minHeight: '50px',
            width: '50px',
            border: '1px solid rgb(0, 0, 0, 0.4)',
            borderRadius: 2,
            p: 2,
          }}>
          <CircularProgress sx={{ color: 'rgb(0, 0, 0, 0.4)' }} />
        </Box>
      </Box>
    );
  }
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
          <CartMovil handleRemove={handleRemove} key={item.id} data={item} />
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
              $56
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
              6%
            </Grid>
            <Grid textAlign={'end'} item xs={4}>
              $6
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            p: 1,
            color: '#ffffff',
            backgroundColor: '#009688',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Grid container spacing={1}>
            <Grid textAlign={'left'} item xs={4}>
              Total
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid textAlign={'end'} item xs={4}>
              $60
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
