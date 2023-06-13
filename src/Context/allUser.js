import { createContext, useEffect, useReducer, useState } from "react";
import { userIntialState, userReducer } from "../Reducer/AllUserReducer";
import { profilIntialstate, profileReducer } from "../Reducer/ProfileReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn,setLoggedIn] = useState(false);
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
      setLoggedIn(true)
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData = async (id) => {
    console.log(id)
    try {
      const user = await fetch(`/api/users/${id}`, {
        method: "GET",
      });
      const response = await user.json();
      console.log("Response UserData",response);
      localStorage.setItem('userDetail', JSON.stringify(response.user));
      userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });

    } catch (e) {
      console.log(e);
    }
  };

  // const followHandle = async (userID) => {
  //   console.log(userID)
    
  //   const token = localStorage.getItem("EncodedToken");
  //   console.log(token)
  //   console.log(`/api/users/follow/${userID}`)
  //   try {
  //     const user = await fetch(`/api/users/follow/${userID}`, {
  //       method: "POST",
  //       headers: {
  //         authorization: `${token}`,
  //       },
  //     });
  //     const response = await user.json();
  //     console.log("Response",response);
  //     userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    getAllUsers();
  }, []);






  return (
    <UserContext.Provider value={{ userDetailState,profileState, profileDispatch,getUserData,userDetailDispatch }}>{children}</UserContext.Provider>
  );
};
