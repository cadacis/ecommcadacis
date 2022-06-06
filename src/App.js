import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import BarUp from "./Components/BarUp"
import Box from '@mui/material/Box';
import HandleError from "./Components/HandleError"
import { Routes, Route, Link, BrowserRouter  } from "react-router-dom";
/******************************************************************************************************/
import {SmallCart} from "./Components/listComponent.jsx"
import {StandarCart} from "./Components/listComponent.jsx"
import {Checkout} from "./Components/listComponent.jsx"
import {Login} from "./Components/listComponent.jsx"
import {Home} from "./Components/listComponent.jsx"
import {Error404} from "./Components/listComponent.jsx"
import {LayoutClient} from "./Components/listComponent.jsx"
import {MakeError} from "./Components/listComponent.jsx"
import {Shop} from "./Components/listComponent.jsx"
import {Lists} from "./Components/listComponent.jsx"
import {Graphics} from "./Components/listComponent.jsx"
import {Search} from "./Components/listComponent.jsx"
/**********************************************************************************************************/

import {useDispatch} from "react-redux"
import {getCart} from "./redux/actions/cart"
/*********************************************************************************************************/
var routes = [
  { element: <Home/>, path: '/' },
  { element: <SmallCart/>, path: '/cart/small' },
  { element: <StandarCart/>, path: '/cart' },
  { element: <Checkout/>, path: '/checkout' },
  { element: <Login/>, path: '/login' },
  { element: <MakeError/>, path: '/error' },
  { element: <Shop/>, path: '/shop' },
  { element: <Lists/>, path: '/lists' },
  { element: <Search/>, path: '/search' },
  { element: <Graphics/>, path: '/graphics' },
  { element: <Error404/>, path: '*' }
]

function App() {

 /*  var dispatch = useDispatch()
  const getInitialData = ()=>{ dispatch(getCart)}

  React.useEffect(() => {
    getInitialData()
    return () => {
      console.log("Clear Component Function");
    };
  }, []); */
 
  return (
    <div className="App">
         <HandleError>
          <BrowserRouter>
              <Routes>
                {routes.map((item,key)=>{
                  return <Route key={key} path={item.path} element={<LayoutClient>{item.element}</LayoutClient>} /> 
                })}
              </Routes>
          </BrowserRouter>
          </HandleError>
          
          
    </div>
  );
}

export default App;
