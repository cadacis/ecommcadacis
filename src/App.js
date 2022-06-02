import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import BarUp from "./Components/BarUp"
import Cart from "./Components/Carts/StandarCart"
import Box from '@mui/material/Box';
function App() {
  return (
    <div className="App">
          <BarUp/>
          <Box display={"flex"} flexDirection="column" justifyContent={"center"} minHeight="90vh"><Cart/></Box>
          
    </div>
  );
}

export default App;
