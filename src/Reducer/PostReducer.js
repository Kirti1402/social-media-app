export const postIntialState = {
    post : []
}

export const postUserReducer = (state,action) =>{
    switch (action.type) {
        case "SET_POST":
            return {...state, post: action.payload}
    }
}