import { createContext, useEffect, useState ,useReducer } from "react";
import { authInitialState,authReducer } from "../Reducer/AuthReducer";
import { userDataIntialState, userDataReducer } from "../Reducer/UserDataReducer";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn] = useState (false);
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [userDataState,userDataDispatch] =useReducer(userDataReducer,userDataIntialState)

    const login = async () =>{
        try{
            const user = await fetch("/api/auth/login",{
                method: "POST",
                body:JSON.stringify({username:authState.username,password:authState.password})
            });
            localStorage.setItem("EncodedToken",response.encodedToken);
            localStorage.setItem("User",JSON.stringify(response.foundUser));
            const response = await user.json();
            userDataDispatch({type:"SET_USER",payload: response.foundUser })
            setIsLoggedIn(true);
        } catch (e){
            console.log(e)
        }
    }

    console.log("authenticate",authState,"UserData",userDataState.user);
    useEffect(() => {
        const token = localStorage.getItem("Encodedtoken");
        if (token) {
          setIsLoggedIn(true);
        //   setIsEncodedToken(token);
        }
      }, []);
  return <authContext.Provider value={{authState, authDispatch,isLoggedIn,login}}>{children}</authContext.Provider>;
};
