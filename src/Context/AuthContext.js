import { createContext, useEffect, useState ,useReducer } from "react";
import { authInitialState,authReducer } from "../Reducer/AuthReducer";
import { userDataIntialState, userDataReducer } from "../Reducer/UserDataReducer";
import { toHaveStyle } from "@testing-library/jest-dom/matchers";
import { toast } from 'react-toastify';

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn] = useState (false);
    const [error,setError] = useState ("");
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [userDataState,userDataDispatch] =useReducer(userDataReducer,userDataIntialState)
    
        // useEffect(() => {
        //     const token = localStorage.getItem("Encodedtoken");
        //     console.log("encodedToken")
        //     if (token) {
        //     //   setIsEncodedToken(token);
        //     }
        //   }, []);

      useEffect(() => {
        if (authState.username && authState.password && isLoggedIn) {
            login()
        }
      }, [authState.username , authState.password]);
    const login = async () =>{
        try{
            const user = await fetch("/api/auth/login",{
                method: "POST",
                body:JSON.stringify({username:authState.username,password:authState.password})
            });

            const response = await user.json();
            // console.log(await user.json())
            if(user.status == 200){
                 localStorage.setItem("EncodedToken",response.encodedToken);
                 localStorage.setItem("User",JSON.stringify(response.foundUser));
                 userDataDispatch({type:"SET_USER",payload: response.foundUser })
            } 
            if(user.status !== 200){
                setIsLoggedIn(false)
                toast.error(`${response.errors}`)
                console.log("error",error)
            }
           
        } catch (e){
            console.log(e)
        }
    }

    const inputValidation =  () =>{
       
        login()
    }

    // console.log("authenticate",authState,"UserData",userDataState.user);
  return <authContext.Provider value={{setIsLoggedIn,error,authState, authDispatch,isLoggedIn,login,inputValidation}}>{children}</authContext.Provider>;
};
