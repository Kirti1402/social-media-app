import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from "react-toastify";
import "./Login.css";
import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";

export default function LoginPage() {

  const { authState, authDispatch, setIsLoggedIn, login } = useContext(authContext);

  const onClickHandleLogin = () => {
    if(authState.username && authState.password) {
      setIsLoggedIn(true);
      login();
    }else{
      toast.warning("Please fill the form")
    }
  };

  const handleGuestLogin = () => {
    authDispatch({ type: "SET_USERNAME", payload: "Kittu@0128" });
    authDispatch({ type: "SET_PASSWORD", payload: "aspoghmz." });

    setIsLoggedIn(true);
  };
  return (
    <div className="login-signup-conatiner">
      <MainBanner />
      <div className="login-form-container">
        <h1>LOG IN</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
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
          </div>
          <div>
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
          </div>
        </Box>
        <div className="log-btn">
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={onClickHandleLogin}
          >
            Log In
          </Button>
        </div>
        <div className="log-btn">
          <Button size="small" color="primary" onClick={handleGuestLogin}>
            Guest Login
          </Button>
          <Link
            to="/signup"
            component="button"
            variant='h6'
          >
            Create an Account <FontAwesomeIcon icon="fa-thin fa-arrow-up-right-from-square" />
          </Link>
        </div>
      </div>
    </div>
  );
}
