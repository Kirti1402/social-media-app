import { createContext, useEffect, useReducer } from "react";
import { authInitialState,authReducer } from "../Reducer/AuthReducer";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, authDispatch] = useReducer(authReducer, authInitialState);


    const login = async () =>{
        try{
            const user = await fetch("/api/auth/login",{
                method: "POST",
                body:JSON.stringify({username:'adarshbalika',password:"adarshBalika123"})
            });

            console.log(await user.json())
        } catch (e){
            console.log(e)
        }
    }

    console.log(state);

    useEffect(() => {
        login()
    },[])
  return <authContext.Provider value={{state, authDispatch}}>{children}</authContext.Provider>;
};
