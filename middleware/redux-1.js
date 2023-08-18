//  REDUX LOGGER ----------------------------------

const { createStore, applyMiddleware } = require("redux")
const { combineReducers } = require("redux")
const { default: logger } = require("redux-logger")

//  State
const initialState = {
    fruits : ["Apple","Banana"],
    count : 2
}

// Action
const addCartAction = (fruit) =>{
    return {
        type : "ADD_CART",
        payload : fruit
    }
}

// Reducer
const addCartReducer = (state = initialState , action) =>{
    switch(action.type) {
        case "ADD_CART" : return {
            ...state,
            count : state.count + 1 ,
            fruits : [...state.fruits, action.payload]
        }

        default : return state
    }
}

// Combine Reducer
const rootReducer = combineReducers({
 cart : addCartReducer
})

// Store
const store = createStore(rootReducer,applyMiddleware(logger))

// Subscribe

store.subscribe(()=>{
    console.log(store.getState())
})

// Dispatch

store.dispatch(addCartAction("Mango"))