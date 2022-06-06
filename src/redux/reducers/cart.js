const defaultState = {
    _id:false,
    items:[],
    total:0,
    subtotal:0,
    tax:0,
    delivery:0,
    star_time:"",
    end_time:""
};


function reducer(state=defaultState, action){
    switch (action.type) {
        case "cart@get":
          var addDeploy = action.payload
          if (action.payload.length > 0) {
                 addDeploy = action.payload.map((item,key)=>{
                 return {...item, deploy:false, count:1}    
            })
          }
          
            return {...state, items:addDeploy}

        case "remove_item@cart":
            var itemsResult = state.items.filter((item,key)=>{
                return item.id != action.id
            })
            return {...state, items:itemsResult}

        case "update_item@cart":
                var itemUpdated = state.items.map((item,key)=>{
                    if (item.id == action.item.id) {
                        return action.item
                    }
                    return item
                })
                return {...state, items:itemUpdated}
        case "add_item@cart":
                     var item = action.item   
                     item.deploy = false
                     item.count =1  
               return {...state, items:[...state.items, item]}
        default:
            return state
    }
}

export default reducer;