import { createContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authInitialState, authReducer } from "../Reducer/AuthReducer";
import {
  userDataIntialState,
  userDataReducer,
} from "../Reducer/UserDataReducer";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    userDataIntialState
  );

  useEffect(() => {
    if (authState.username && authState.password && isLoggedIn) {
      login();
    } 
  }, [authState.username, authState.password]);


  const login = async () => {
    try {
      const user = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: authState.username,
          password: authState.password,
        }),
      });

      const response = await user.json();
      if (user.status == 200) {
        localStorage.setItem("EncodedToken", response.encodedToken);
        localStorage.setItem("User", JSON.stringify(response.foundUser));
        userDataDispatch({ type: "SET_USER", payload: response.foundUser });
        navigate("/");
        toast.success(`Successfully Logged In`);
      }
      if (user.status !== 200) {
        setIsLoggedIn(false);
        toast.error(`${response.errors}`);
        throw new Error(response.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = async () => {
    try {
      const user = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: authState.username,
          password: authState.password,
          email: authState.email,
          password: authState.password,
          firstName:authState.firstName,
          lastName:authState.lastName,
        }),
      });

      const response = await user.json();
      if (user.status == 201) {
        localStorage.setItem("EncodedToken", response.encodedToken);
        localStorage.setItem("User", JSON.stringify(response.createdUser));
        userDataDispatch({ type: "SET_USER", payload: response.createdUser });
        navigate("/");
        toast.success(`Successfully Signed Up`);
      }else{
        setIsLoggedIn(false);
        toast.error(`${response.errors}`);
        throw new Error(response.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(authState);

  return (
    <authContext.Provider
      value={{
        setIsLoggedIn,
        authState,
        authDispatch,
        isLoggedIn,
        login,
        signUp,
        userDataState
      }}
    >
      {children}
    </authContext.Provider>
  );
};
