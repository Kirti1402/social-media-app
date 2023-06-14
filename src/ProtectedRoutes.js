import {Navigate, useLocation } from "react-router-dom";
export const ProtectedRoutes = ({children}) => {
  const token = localStorage.getItem("EncodedToken");
  const location = useLocation();
  if (!token) {
    return (
      <>
        <Navigate to='/login' />
      </>
    );
  }
 
  return children;
};
