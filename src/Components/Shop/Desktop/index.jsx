import React from 'react';
import Box from '@mui/material/Box';
import Card from './card';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Index = () => {
  const [dataOrigen, setDataOrigen] = React.useState([]);
  const [dataFilter, setDataFilter] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState();
  const [minPrice, setMinPrice] = React.useState(0);
  const handleReset = () => {
    setDataFilter(dataOrigen);
  };

  const handleSearchName = (e) => {
    var event = e.target.value.toLowerCase();
    var filter = dataOrigen.filter((item) => {
      var title = item.title.toLowerCase();
      if (title.includes(event)) {
        return item;
      }
    });
    setDataFilter(filter);
  };

  const getData = async () => {
    setIsLoading(true);
    var fetch = await axios.get('https://fakestoreapi.com/products');
    setDataOrigen(fetch.data);
    setDataFilter(fetch.data);
    setIsLoading(false);
    var maxPrice = 0;
    fetch.data.map((item) => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
    });
    setMaxPrice(maxPrice);
  };

  const handleMinPrice = (e) => {
    var value = e.target.value;
    setMinPrice(value);
    setMaxPrice(value);
    var filter = dataOrigen.filter((item) => {
      if (item.price > value) {
        return item;
      }
    });
    setDataFilter(filter);
  };

  const handleMaxPrice = (e) => {
    var value = e.target.value;
    if (value <= minPrice) {
      setMaxPrice(value);
      return;
    }
    setMaxPrice(value);
    var filter = dataOrigen.filter((item) => {
      if (item.price < value) {
        return item;
      }
    });
    setDataFilter(filter);
  };

  React.useEffect(() => {
    getData();
    return () => {
      console.log('Clear Component');
    };
  }, []);

  if (isLoading) {
    return <Box>Loading</Box>;
  }
  if (dataFilter.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-basic"
                label="Search by Name"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleSearchName}
              />
            </Grid>
            {/* 
            <Grid item xs={12} sm={2}>
              <TextField
                id="outlined-basic"
                label={'$-Min = ' + minPrice}
                variant="outlined"
                size="small"
                value={minPrice}
                fullWidth
                onChange={handleMinPrice}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                id="outlined-basic"
                label={'$-Max = ' + maxPrice}
                variant="outlined"
                value={maxPrice}
                size="small"
                fullWidth
                onChange={handleMaxPrice}
              />
            </Grid> */}
            <Grid item xs={12} sm={2}>
              <Button
                onClick={handleReset}
                fullWidth
                variant="contained"
                color="primary">
                Reset
              </Button>
            </Grid>
          </Grid>
        </Box>
        Vacio
      </Box>
    );
  }
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <TextField
              id="outlined-basic"
              label="Search by Name"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleSearchName}
            />
          </Grid>

          {/*   <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-basic"
      
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleMinPrice}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-basic"
          
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleMaxPrice}
            />
          </Grid> */}
          <Grid item xs={12} sm={2}>
            <Button
              onClick={handleReset}
              fullWidth
              variant="contained"
              color="primary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        {dataFilter.map((item, key) => {
          return (
            <Grid item key={key} xs={12} sm={4} md={3} lg={3} xl={2}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Index;
