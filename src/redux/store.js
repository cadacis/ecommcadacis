import { configureStore } from '@reduxjs/toolkit';
import user from "./reducers/user.js";
import cart from "./reducers/cart.js";
import checkout from "./reducers/checkout.js";

 const store = configureStore({
  reducer: {
    user,
    cart,
    checkout,
  
  },
});
export default store