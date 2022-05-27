import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
const Index = () => {
    var textColor = "white"
    var fontType = "body1"
    var menu = [
                {title:"Home", link:"/"},
                {title:"Most Popular", link:"/"},
                {title:"Best Seller", link:"/"},
                {title:"About Us", link:"/"} 
               ]


    return (
        <div>
            <Box  sx={{pt:0.5}}>    
              <ButtonGroup  variant="text" color="primary" aria-label="">
                        {menu.map((item,key)=>{return (<Button color='white' link={item.link}><Typography variant={fontType} color="white">{item.title}</Typography></Button>)})}
              </ButtonGroup>
            </Box>


        </div>
    );
}

export default Index;
