import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

const Index = () => {
  const [data, setData] = React.useState({
    sku: '',
    marketplace: '',
    performance: '',
    date: new Date(),
    temp: 0,
  });
  const [dialog, setDialog] = React.useState(false);
  const handleDialog = (value) => {
    setDialog(!dialog);
  };
  const handleDate = (value) => {
    setData({ ...data, date: value });
  };
  const handleSKU = (e) => {
    var value = e.target.value;
    setData({ ...data, sku: value });
  };
  const handleMarketplace = (e) => {
    var value = e.target.value;
    setData({ ...data, marketplace: value });
  };
  const handlePerformance = (e) => {
    var value = e.target.value;
    setData({ ...data, performance: value });
  };
  const handleTemp = (e) => {
    var value = e.target.value;
    setData({ ...data, temp: value });
  };
  return (
    <Box>
      <Dialog open={dialog} onClose={handleDialog}>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" color="initial">
            {data.sku == '' ? '' : 'SKU: ' + data.sku}
          </Typography>
          <Typography variant="body1" color="initial">
            {data.marketplace == '' ? '' : 'Marketplace: ' + data.marketplace}
          </Typography>
          <Typography variant="body1" color="initial">
            {data.performance == '' ? '' : 'Performance: ' + data.performance}
          </Typography>
          <Typography variant="body1" color="initial">
            {'Date: ' + data.date}
          </Typography>
          <Typography variant="body1" color="initial">
            {'Temporalidad: ' + data.temp}
          </Typography>
        </Box>
      </Dialog>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            size="small"
            id="sku"
            label="Ingresa SKU"
            variant="outlined"
            value={data.sku}
            fullWidth
            onChange={handleSKU}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            size="small"
            id="marketplace"
            label="Marketplace"
            variant="outlined"
            value={data.marketplace}
            onChange={handleMarketplace}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            size="small"
            id="performance"
            label="Performance"
            variant="outlined"
            value={data.performance}
            onChange={handlePerformance}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={data.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField fullWidth size="small" {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex">
            <Box display="flex" justifyContent={'left'} flexGrow={1 / 2}>
              <Select
                labelId="temp"
                id="temp"
                value={data.temp}
                label={data.temp}
                onChange={handleTemp}
                size="small"
                sx={{ minWidth: '230px' }}>
                <MenuItem value={0}>Diario</MenuItem>
                <MenuItem value={1}>Semanal</MenuItem>
                <MenuItem value={2}>Mensual</MenuItem>
              </Select>
            </Box>
            <Box display="flex" justifyContent={'end'} flexGrow={1 / 2}>
              <Button
                onClick={handleDialog}
                variant="contained"
                color="primary">
                Buscar
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
