export const authInitialState ={
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    username:""
}

export const authReducer = (state,action) =>{
    switch (action.type) {
        case "SET_FIRSTNAME":
            return {...state, firstName: action.payload}
        case "SET_LASTNAME":
            return {...state, lastName: action.payload}
        case "SET_USERNAME":
            return {...state, username: action.payload}
        case "SET_EMAIL":
                return {...state, email: action.payload}
        case "SET_PASSWORD":
            return {...state, password: action.payload}
        default:
            return { ...state };
        
    }
}