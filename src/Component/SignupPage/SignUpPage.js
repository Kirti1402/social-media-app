import React from 'react'
import MainBanner from '../LoginPage/MainBanner'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignUpPage() {
  return (
    <div className='login-signup-conatiner'>
      <MainBanner/>
      <div className="login-form-container">
        <h1>Sign Up</h1>

      </div>
    </div>
  )
}

export default SignUpPage