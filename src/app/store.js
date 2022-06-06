import { configureStore } from '@reduxjs/toolkit';
import user from "../redux/reducers/user.js";
import userbyid from "../redux/reducers/userById.js";
import product from "../redux/reducers/product.js";
import productById from "../redux/reducers/cart.js";
import local from "../redux/reducers/local.js";
import localById from "../redux/reducers/localById.js";
import dataDashboard from "../redux/reducers/dataDashboard.js";
import notify from "../redux/reducers/notify.js";
import wait from "../redux/reducers/wait.js";
import checkout from "../redux/reducers/checkout.js";
import sections from "../redux/reducers/checkout.js";

export const store = configureStore({
  reducer: {
    user,
    product,
    productById,
    local,
    localById,
    dataDashboard,
    userbyid,
    notify,
    checkout,
    sections,
    wait
  },
});
