export const userIntialState = {
    users:[],
    userData:{}
}

export const userReducer = (state,action) => {
    switch (action.type) {
        case "SET_USERS" : 
        return {...state,users:[...action.payload]}
        case "SET_USER_DATA":
            return {...state,userData: action.payload}
    }
}