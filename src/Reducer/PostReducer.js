import { formatDate } from "../backend/utils/authUtils";
export const postIntialState = {
    post : [],
    allPost:[],
    bookmark:[],
    createPost:{
    content:"",
    firstName: "Kirti",
    lastName: "Singh",
    avatar:"https://cdn.pixabay.com/photo/2022/07/08/18/51/female-7309755_1280.png",
    username: "Kittu@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    }
}

export const postUserReducer = (state,action) =>{
    switch (action.type) {
        case "SET_POST":
            return {...state, post: action.payload}
        case "SET_ALL_POST":
                return {...state, allPost: action.payload}
        case "SET_BOOKMARK":
                return {...state, bookmark: action.payload}
        case "SET_CONTENT":
            return  {...state,createPost:action.payload}
    }
}