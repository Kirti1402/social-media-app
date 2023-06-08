import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import MainBanner from "./MainBanner";

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
      <MainBanner/>
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
