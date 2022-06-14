import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from './table';
const Index = () => {
  const [data, setData] = React.useState(1);
  const handleData = (e) => {
    setData(e.target.value);
  };
  return (
    <Box>
      <Box display="flex">
        <Box display="flex" flexGrow={1 / 2} justifyContent="left">
          <Typography variant="h6" color="grayDash.main">
            Datos Generales
          </Typography>
        </Box>
        <Box display="flex" flexGrow={1 / 2} justifyContent="end">
          <Select
            labelId="temp"
            id="temp"
            value={data}
            label={data}
            onChange={handleData}
            size="small">
            <MenuItem value={0}>Diario</MenuItem>
            <MenuItem value={1}>Semanal</MenuItem>
            <MenuItem value={2}>Mensual</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box>
        <Table />
      </Box>
    </Box>
  );
};

export default Index;
