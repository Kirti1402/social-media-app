import { createContext, useEffect, useReducer } from "react";
import { userIntialState, userReducer } from "../Reducer/AllUserReducer";
import { profilIntialstate, profileReducer } from "../Reducer/ProfileReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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
    console.log(id)
    try {
      const user = await fetch(`/api/users/${id}`, {
        method: "GET",
      });
      const response = await user.json();
      console.log("Response UserData",response);
      userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers();
    console.log("useEffect")
    const loggedInUserDetail =JSON.parse(localStorage.getItem("User"));
      getUserData(loggedInUserDetail._id);
   
  }, []);




  return (
    <UserContext.Provider value={{ userDetailState,profileState, profileDispatch,getUserData }}>{children}</UserContext.Provider>
  );
};
