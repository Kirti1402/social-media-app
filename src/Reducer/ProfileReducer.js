export const profilIntialstate = {
    image:"",
    imageError:"",
    backgroundImage:""
}

export const profileReducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "SET_IMAGE":
            return {...state, image: action.payload}
        case "SET_IMAGE_ERROR":
            return {...state,imageError:action.payload}
        case "SET_BACKGROUND_IMAGE":
            return {...state,backgroundImage:action.payload}

    }
}