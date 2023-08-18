//  REDUX THUNK -------------------------

const { combineReducers, createStore } = require("redux")

// State

const initialState = {
    datas : []
}

// Action

const requestApiData = () =>{
    return {
        type : "REQUEST_API_DATA"
    }
}

const successfullyGetApiData = (URL) =>{
    return {
        type : "SUCCESSFULLY_GET_API_DATA",
        payload : URL
    }
}

const errorInApiData = (error) =>{
    return {
        type : "ERROR_IN_API_DATA",
        payload : error
    }
}

// Reducer

const apiReducer = (state = initialState , action) => {
    switch(action.type) {
        case "REQUEST_API_DATA" : return 
        case "SUCCESSFULLY_GET_API_DATA" : return 
        case "ERROR_IN_API_DATA" : return
        default : return state
    }
}

// Combine Reducer

const rootReducer = combineReducers({apiReducer})

// Redux MiddleWare

function fetchData(){
    
}

// Store

const store = createStore(rootReducer)

// Subscribe Store

store.subscribe(()=>{
    console.log(store.getState())
})

// Dispatch Store

store.dispatch(fetchData())