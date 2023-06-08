import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import LandingPage from "./LandingPage";
import LoginPage from "../LoginPage/LoginPage";

export default function HomePage() {
    const {isLoggedIn} = useContext(authContext)
    console.log(isLoggedIn)
  return <div>{isLoggedIn?<LandingPage/> : <LoginPage/>}</div>;
}
