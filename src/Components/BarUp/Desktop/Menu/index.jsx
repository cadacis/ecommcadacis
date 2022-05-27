import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
const Index = () => {
    return (
        <div>
            <Box sx={{pt:0.5}}>    
              <ButtonGroup variant="text" color="white" aria-label="">
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>1</Button>
                            <Button>23</Button>
              </ButtonGroup>
            </Box>
      
        </div>
    );
}

export default Index;
