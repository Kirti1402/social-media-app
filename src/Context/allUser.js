import { createContext, useEffect, useReducer } from "react";
import { userIntialState, userReducer } from "../Reducer/AllUserReducer";
import { profilIntialstate, profileReducer } from "../Reducer/ProfileReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [suggestionState, suggestionDispatch] = useReducer(userReducer, userIntialState);
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
      suggestionDispatch({ type: "SET_USERS", payload: response.users });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getProfileData = async (id) => {
    try {
      const user = await fetch("/api/users/", {
        method: "GET",
      });

      const response = await user.json();
      console.log(response);
      // console.log(await user.json())
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider value={{ suggestionState,profileState, profileDispatch }}>{children}</UserContext.Provider>
  );
};
