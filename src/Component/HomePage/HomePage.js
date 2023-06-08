import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import LandingPage from "./LandingPage";
import LoginPage from "../LoginPage/LoginPage";

export default function HomePage() {
    const token = localStorage.getItem("EncodedToken");
    const {isLoggedIn} = useContext(authContext)
    console.log(isLoggedIn)
  return <div>{token?<LandingPage/> : <LoginPage/>}</div>;
}
