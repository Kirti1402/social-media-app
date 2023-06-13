export const followUnfollowIntialState = {
    usersFollowing : {},
    followUser:{}
}

export const followUnfollowUserReducer = (state,action) =>{
    switch (action.type) {
        case "SET_USER_FOLLOWING":
            return {...state, usersFollowing: action.payload}
        case "SET_FOLLOWED_USER":
            return {...state,followUser:action.payload}
    }
}