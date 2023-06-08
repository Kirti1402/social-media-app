import {Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
export const ProtectedRoutes = ({children}) => {
  const token = localStorage.getItem("Encodedtoken");
  const location = useLocation();
  if (!token) {
    console.log("protected routes")
    return (
      <>
        <Navigate to='/' />
      </>
    );
  }
 
  return children;
};
