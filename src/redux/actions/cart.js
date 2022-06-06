import axios from "axios";

const getCart = async (dispatch, getSate) => {
  var fetch = await axios.get('https://fakestoreapi.com/products');
   dispatch({ type: "cart@get", payload: fetch.data }); 
};
const addItem = (item) => async (dispatch, getSate) => {
  dispatch({ type: "add_item@cart", item: item }); 
};
const removeItem = (id) => async (dispatch, getSate) => {
    dispatch({ type: "remove_item@cart", id: id }); 
};
const updateItem = (item) => async (dispatch, getSate) => {
  dispatch({ type: "update_item@cart", item:item }); 
};

export {getCart, removeItem, updateItem, addItem};
