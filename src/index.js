import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./Context/allUser";
import { FollowUnfollowProvider } from "./Context/FollowUnFollowContext";
import { PostProvider } from "./Context/PostContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <FollowUnfollowProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </FollowUnfollowProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
