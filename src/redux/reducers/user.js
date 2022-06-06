const defaultState = {
  _id: false,
  firstname: "",
  lastname: "",
  email: false,
  pay_method:false,
  roles: false,
  createdAt: "",
  updatedAt: "",
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "user@get":
      
        return action.payload;


    default:
      return state;
  }
}

export default reducer;
