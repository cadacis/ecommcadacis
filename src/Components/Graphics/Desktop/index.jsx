import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';
import Chart4 from './chart4';
import Chart5 from './chart5';
import Chart6 from './chart6';
const Index = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Card sx={{ minWidth: 275, minHeight: 350 }}>
            <Chart1 />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Card sx={{ minWidth: 275, minHeight: 350 }}>
            <Chart2 />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card sx={{ minWidth: 275, minHeight: 350 }}>
            <Chart3 />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <Chart4 />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <Chart5 />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card sx={{ minWidth: 275 }}>
            <Chart6 />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
