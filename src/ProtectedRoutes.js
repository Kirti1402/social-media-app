import {Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
export const ProtectedRoutes = ({children}) => {
  const token = localStorage.getItem("EncodedToken");
  const location = useLocation();
  console.log(token)
  if (!token) {
    console.log("protected routes")
    return (
      <>
        <Navigate to='/login' />
      </>
    );
  }
 
  return children;
};
