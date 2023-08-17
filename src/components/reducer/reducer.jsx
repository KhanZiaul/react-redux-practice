// let initialState = 0 ;

// function changeTheNumber(state = initialState, action) {
//     switch(action.type){
//         case "INCREMENT" : return state + 1 ;
//         case "DECREMENT" : return state - 1 ;
//         default : return state
//     }
//   }

//   export default changeTheNumber;

//  Using payload ----------------------------------

let initialState = {
    count: 0,
    users: []
}

function changeTheNumber(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT": return { ...state, count: state.count + 1 };
        case "DECREMENT": return { ...state, count: state.count - 1 };
        case "ADD_USER": return {
            ...state,
            count: state.count + 1,
            users: [...state.users, action.payload]
        };
        default: return state;
    }
}

export default changeTheNumber;