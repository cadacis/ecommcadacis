import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { themeOne } from "./Theme/themes";
import BarUp from "./Components/BarUp"
function App() {
  return (
    <div className="App">
          <BarUp/>
    </div>
  );
}

export default App;
