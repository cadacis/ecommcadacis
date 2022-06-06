const checkout = (data) => async (dispatch, getSate) => {
  dispatch({ type: "checkout", payload: data });
};

export default checkout;
