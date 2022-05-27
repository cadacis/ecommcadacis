import React from 'react';
import Box from '@mui/material/Box';
import Desktop from "./Desktop"
import Table from "./Table"
import Movil from "./Movil"

const Index = () => {
    return (
        <div>
          <Box sx={{display:{xs:"none", sm:"none", md:"block"}}}>
            <Desktop/>
          </Box>
          <Box sx={{display:{xs:"none", sm:"block", md:"none"}}}>
            <Table/>
          </Box>
          <Box sx={{display:{xs:"block", sm:"none", md:"none"}}}>
            <Movil/>
          </Box>
        </div>
    );
}

export default Index;
