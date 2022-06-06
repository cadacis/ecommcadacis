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
  const [isLoading, setIsLoading] = React.useState(false);

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
      <Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                id="outlined-basic"
                label="Search by Name"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleSearchName}
              />
            </Grid>

            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-basic"
              label="Search by Name"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleSearchName}
            />
          </Grid>

          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
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
