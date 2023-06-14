import { createContext, useEffect, useReducer, useState } from "react";
import { userIntialState, userReducer } from "../Reducer/AllUserReducer";
import { profilIntialstate, profileReducer } from "../Reducer/ProfileReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn,setLoggedIn] = useState(false);
  const [userId,setUserId] = useState('');
  const [userDetailState, userDetailDispatch] = useReducer(userReducer, userIntialState);
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profilIntialstate
  );

  const getAllUsers = async () => {
    try {
      const user = await fetch("/api/users", {
        method: "GET",
      });
      const response = await user.json();
      userDetailDispatch({ type: "SET_USERS", payload: response.users });
      
    } catch (e) {
      console.log(e);
    }
  };


  const getUserData = async (id) => {
    try {
      const user = await fetch(`/api/users/${id}`, {
        method: "GET",
      });
      const response = await user.json();
      localStorage.setItem('userDetail', JSON.stringify(response.user));
      userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
      setLoggedIn(!loggedIn)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [loggedIn]);

  return (
    <UserContext.Provider value={{ userDetailState,getUserData,profileState, profileDispatch,userDetailDispatch,userId,setUserId,loggedIn,setLoggedIn }}>{children}</UserContext.Provider>
  );
};
