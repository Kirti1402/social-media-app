import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'

export default function LoginPage() {
    const {authState, authDispatch,login} = useContext(authContext)

    const onClickHandleLogin =() =>{
        login()
    }

    const handleGuestLogin=()=>{
        authDispatch({type: "SET_USERNAME", payload:'Kittu@0128'});
        authDispatch({type: "SET_PASSWORD", payload:'aspoghmz.'});
        login();
    }
  return (
    <div>
        <form>
            <div>
            <label>Username</label>
            <input type='text' value={authState.username} onChange={(e)=>authDispatch({ type: "SET_USERNAME", payload: e.target.value})} required/>
            </div>
            <div>
            <label>Password</label>
            <input type='password' value={authState.password} onChange={(e)=>authDispatch({ type: "SET_PASSWORD", payload: e.target.value})} required/>
            </div>
            <button onClick={login} >Log In</button>
        </form>
        <button onClick={handleGuestLogin}>Guest Login</button>
        
    </div>
  )
}
