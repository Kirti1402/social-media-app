import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'

export default function LoginPage() {
    const {state, authDispatch} = useContext(authContext)

    const handleGuestLogin=()=>{
        authDispatch({type: "SET_USERNAME", payload:'Kittu@0128'});
        authDispatch({type: "SET_PASSWORD", payload:'aspoghmz.'});
    }
  return (
    <div>
        <form>
            <div>
            <label>Username</label>
            <input type='text' value={state.username} onChange={(e)=>authDispatch({ type: "SET_USERNAME", payload: e.target.value})} />
            </div>
            <div>
            <label>Password</label>
            <input type='password' value={state.password} onChange={(e)=>authDispatch({ type: "SET_PASSWORD", payload: e.target.value})}/>
            </div>
            <button >Log In</button>
        </form>
        <button onClick={handleGuestLogin}>Guest Login</button>
        
    </div>
  )
}
