import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { userIntialState, userReducer } from "../Reducer/AllUserReducer";
import { profilIntialstate, profileReducer } from "../Reducer/ProfileReducer";
import { postIntialState, postUserReducer } from "../Reducer/PostReducer";
import axios from 'axios';
// import { PostContext } from "./PostContext";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const {
  //   getUserPost
  // } = useContext(PostContext);
  const token = localStorage.getItem("EncodedToken");
  const [loggedIn,setLoggedIn] = useState(false);
  const [userId,setUserId] = useState('');
  const [editProfileBtn,setEditProfileBtn] = useState(false);
  const [userDetailState, userDetailDispatch] = useReducer(userReducer, userIntialState);
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profilIntialstate
  );
  const [postState, postDispatch] = useReducer(
    postUserReducer,
    postIntialState
  );

  const getAllUsers = async () => {
    try {
      const user = await fetch("/api/users", {
        method: "GET",
      });
      const response = await user.json();
      localStorage.setItem("AllUser",JSON.stringify(response.users) );
      userDetailDispatch({ type: "SET_USERS", payload: response.users });
      
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData =  (id) => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    if(id === loggedInUser._id){
      localStorage.setItem('userDetail', JSON.stringify(loggedInUser));
      userDetailDispatch({ type: "SET_USER_DATA", payload: loggedInUser });
    }else{
      setUserDataRespectivePage(id);
    }
   
  };
  const setUserDataRespectivePage = async (id) => {
    try {
      const user = await fetch(`/api/users/${id}`, {
        method: "GET",
      });
      const response = await user.json();
      console.log("setrespective",response)
      localStorage.setItem('userDetail', JSON.stringify(response.user));
      userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
      setLoggedIn(!loggedIn)
    } catch (e) {
      console.log(e);
    }
  }

  const editUser = async (post,id) => {
    try {
      const user = await axios.post(
        `/api/users/edit`,
        { userData: post },
        {
          headers: {
            authorization: token,
          },
        },
      );
      console.log("EditUSer",user.data.user)
      localStorage.setItem('User', JSON.stringify(user.data.user));
      
      userDetailDispatch({ type: "SET_USER_DATA", payload: user.data.user });
      // postDispatch({type:"SET_POST",payload:post})
      // const response = await user.json();
      setUserDataRespectivePage(id)
      // getUserPost(username);
    } catch (e) {
      console.log(e);
    }
  }
  console.log("first",userDetailState)

 

  useEffect(() => {
    getAllUsers();
  
  }, [ profileState]);

  return (
    <UserContext.Provider value={{ userDetailState,getUserData,profileState, profileDispatch,userDetailDispatch,userId,setUserId,loggedIn,setLoggedIn,editUser,editProfileBtn,setEditProfileBtn }}>{children}</UserContext.Provider>
  );
};
