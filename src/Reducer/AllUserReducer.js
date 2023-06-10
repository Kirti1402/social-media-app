export const userIntialState = {
    users:[]
}

export const userReducer = (state,action) => {
    console.log(action.payload)
    switch (action.type) {
        case "SET_USERS" : 
        return {...state,users:[...action.payload]}
    }
}