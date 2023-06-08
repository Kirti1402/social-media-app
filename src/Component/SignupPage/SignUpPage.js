import React, { useContext } from "react";
import MainBanner from "../LoginPage/MainBanner";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUpPage() {
  const navigate = useNavigate();

  const { authState, authDispatch, setIsLoggedIn,signUp } = useContext(authContext);
  const onClickHandleSignUp = () => {
    console.log(authState)
    if (
      authState.username &&
      authState.password &&
      authState.firstName &&
      authState.lastName &&
      authState.email
    ) {
      setIsLoggedIn(true);
      signUp();
    } else {
      toast.warning("Please fill the form");
    }
  };
  return (
    <div className="login-signup-conatiner">
      <MainBanner />
      <div className="login-form-container">
        <h1>Sign Up</h1>
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
              label="FirstName"
              size="medium"
              variant="outlined"
              value={authState.firstName}
              onChange={(e) =>
                authDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="LastName"
              size="medium"
              variant="outlined"
              value={authState.lastName}
              onChange={(e) =>
                authDispatch({ type: "SET_LASTNAME", payload: e.target.value })
              }
            />
          </div>

          <div>
            {" "}
            <TextField
              id="outlined-basic"
              label="UserName"
              size="medium"
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
              label="Email"
              size="medium"
              variant="outlined"
              value={authState.email}
              onChange={(e) =>
                authDispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              id="outlined-adornment-password"
              label="Password"
              size="medium"
              variant="outlined"
              type="password"
              value={authState.password}
              onChange={(e) =>
                authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
          </div>
        </Box>
        <div className="log-btn">
          <Button variant="contained" size="small" color="primary" onClick={onClickHandleSignUp}>
            Sign Up
          </Button>
        </div>
        <div className="log-btn">
          <Button
            size="small"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
