import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(mes, sku, market, visual, invest) {
  return { mes, sku, market, visual, invest };
}

const rows = [
  createData('Apr 22', 159, 'Amazon', 24, 4.0),
  createData('Apr 22', 237, 'Amazon', 37, 4.3),
  createData('Apr 22', 262, 'Amazon', 24, 6.0),
  createData('Apr 22', 305, 'Amazon', 67, 4.3),
  createData('Apr 22', 356, 'Amazon', 49, 3.9),
];

const TableCustom = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mes</TableCell>
              <TableCell align="right">SKU</TableCell>
              <TableCell align="right">Market</TableCell>
              <TableCell align="right">Visualizaciones</TableCell>
              <TableCell align="right">Inversion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.mes}
                </TableCell>

                <TableCell align="right">{row.sku}</TableCell>
                <TableCell align="right">{row.market}</TableCell>
                <TableCell align="right">{row.visual}</TableCell>
                <TableCell align="right">{row.invest}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCustom;
