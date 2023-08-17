export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addUser= (user) => {
    return {
        type: "ADD_USER",
        payload:user
    }
}