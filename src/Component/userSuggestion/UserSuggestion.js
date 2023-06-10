import React, { useEffect, useReducer } from 'react'
import { userIntialState,userReducer } from '../../Reducer/AllUserReducer';

export default function UserSuggestion() {

    const [state,suggestionDispatch] = useReducer(userReducer, userIntialState)

    const getAllUsers = async () => {
        try {
          const user = await fetch("/api/users", {
            method: "GET",
          });
          const response = await user.json();
          suggestionDispatch({type:"SET_USERS",payload:response.users})
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        getAllUsers();
      },[])

    
  return (
    <div>ProfileSuggestion
        {state.users.length >0 && state.users.map(({firstName,lastName,username}) => (
            <div>
                <h3>{firstName +" " + lastName}</h3>
                <p>{username}</p>
            </div>
        ))}
    </div>
  )
}
