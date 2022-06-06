const defaultState = {
    _id:"",
    
    star_time:"",
    end_time:""
};
function reducer(state=defaultState, action){
    switch (action.type) {
        case "checkout":
            return action.payload
        default:
            return state
    }
}

export default reducer;