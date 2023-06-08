export const userDataIntialState ={
    user:{},
    followers:[],
    following:[],
    encodedToken:''
}

export const userDataReducer = (state,action) =>{
    switch(action.type){
        case "SET_USER" :
            return {...state,user:action.payload}
    }

}