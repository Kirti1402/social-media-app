import { createContext, useEffect, useState ,useReducer } from "react";
import { authInitialState,authReducer } from "../Reducer/AuthReducer";
import { userDataIntialState, userDataReducer } from "../Reducer/UserDataReducer";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn] = useState (false);
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [userDataState,userDataDispatch] =useReducer(userDataReducer,userDataIntialState)
    
    useEffect(() => {
        const token = localStorage.getItem("Encodedtoken");
        console.log("encodedToken")
        if (token) {
          setIsLoggedIn(true);
        //   setIsEncodedToken(token);
        }
      }, []);

      useEffect(() => {
        if (authState.username && authState.password) {
          login();
        }
      }, [authState.username, authState.password]);
    const login = async () =>{
        try{
            console.log("username",authState)
            const user = await fetch("/api/auth/login",{
                method: "POST",
                body:JSON.stringify({username:authState.username,password:authState.password})
            });

            const {encodedToken , foundUser} = await user.json();
            // console.log(await user.json())
            if(user.status == 200){
                 localStorage.setItem("EncodedToken",encodedToken);
                 localStorage.setItem("User",JSON.stringify(foundUser));
                 userDataDispatch({type:"SET_USER",payload: foundUser })
                 setIsLoggedIn(true);
            } 
           
        } catch (e){
            console.log(e)
        }
    }

    const inputValidation =  () =>{
       
        login()
    }

    console.log("authenticate",authState,"UserData",userDataState.user);
  return <authContext.Provider value={{authState, authDispatch,isLoggedIn,login,inputValidation}}>{children}</authContext.Provider>;
};
