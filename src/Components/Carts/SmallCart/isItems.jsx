import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import IsLoading from './isLoading';
import Typography from '@mui/material/Typography';

const Item = (props) => {
  var data = props.data;
  var total = props.total - 1;
  var num = props.num;
  console.log(total);
  console.log(num);
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
        <Box>
          <Typography variant="body1" color="secondary">
            {'x' + 1}
          </Typography>
        </Box>
      </Box>
      {total == num ? '' : <Divider />}
    </Box>
  );
};

const IsItems = () => {
  const [products, setProducts] = React.useState([]);

  const getProduct = async () => {
    var fetch = await axios.get('https://fakestoreapi.com/products');
    setProducts(fetch.data.splice(1, 6));
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  /*Retorna en espera si el listado esta vacio*/
  if (products.length == 0) {
    return (
      <Box sx={{ p: 1 }}>
        <IsLoading />
        <Box sx={{ mt: 1 }} textAlign={'center'}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button disabled fullWidth variant="outlined" color="primary">
                Cart
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button disabled fullWidth variant="contained" color="secondary">
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
            <Item key={key} num={key} total={products.length} data={item} />
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
            <Button fullWidth variant="outlined" color="primary">
              Cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="secondary">
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IsItems;
