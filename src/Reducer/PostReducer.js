export const postIntialState = {
    post : [],
    allPost:[]
}

export const postUserReducer = (state,action) =>{
    switch (action.type) {
        case "SET_POST":
            return {...state, post: action.payload}
        case "SET_ALL_POST":
                return {...state, allPost: action.payload}
    }
}