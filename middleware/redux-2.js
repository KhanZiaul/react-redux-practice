//  REDUX THUNK -------------------------

const { default: axios } = require("axios")
const { combineReducers, createStore, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")

// State

const initialState = {
    datas : [],
    isLoading:false
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
        case "REQUEST_API_DATA" : return {
            ...state,
            isLoading:true
        }
        case "SUCCESSFULLY_GET_API_DATA" : return {
            ...state,
            datas:[...state.datas,action.payload],
            isLoading:false
        }
        case "ERROR_IN_API_DATA" : return {
            isLoading:false,
            err : action.err
        }
        default : return state
    }
}

// Combine Reducer

const rootReducer = combineReducers({apiReducer})

// Redux MiddleWare

function fetchData(){
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then((res) =>{
        console.log(res.data)
    })
    .catch((err) =>{
        console.log(err.message)
    })
}

// Store

const store = createStore(rootReducer,applyMiddleware(thunk))

// Subscribe Store

store.subscribe(()=>{
    console.log(store.getState())
})

// Dispatch Store

store.dispatch(fetchData())