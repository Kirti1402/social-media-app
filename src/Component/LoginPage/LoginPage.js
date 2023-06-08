import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../../Assets/AuthPageBanner.png"
import "./Login.css"

export default function LoginPage() {
  const { authState, authDispatch, login, inputValidation } =
    useContext(authContext);

  const onClickHandleLogin = () => {
    login();
  };

  const handleGuestLogin = () => {
    authDispatch({ type: "SET_USERNAME", payload: "Kittu@0128" });
    authDispatch({ type: "SET_PASSWORD", payload: "aspoghmz." });
  };
  return (
   <div className="login-conatiner">
    <div className="text-container">
        {/* <img src={image}/> */}
        <div className="text-detail">
        <h1 className="title">
            <span>Explore</span>
            <span>Together</span>
            </h1>
        <h4 >FOLLOW<span className="span-text">PEOPLE AROUND THE GLOBE</span></h4>
        <h4>CONNECT<span className="span-text">WITH YOUR TRAVELLERS</span></h4>
        <h4>SHARE<span className="span-text">YOUR EXPERIENCE</span></h4>
        </div>
        
        </div>
     <div className="login-form-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="UserName"
          size="small"
          variant="outlined"
          value={authState.username}
          onChange={(e) =>
            authDispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          value={authState.password}
          onChange={(e) =>
            authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />
        <div>
          <Button variant="contained" size="small" color="primary">
            Log In
          </Button>
        </div>
      </Box>
      <div>
        <Button size="small" color="primary" onClick={handleGuestLogin}>
          Guest Login
        </Button>
      </div>
      </div>
   </div>
  );
}
