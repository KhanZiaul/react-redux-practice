//  REDUX THUNK -------------------------

// State


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

// Combine Reducer

// Redux MiddleWare

// Store

// Subscribe Store


// Dispatch Store