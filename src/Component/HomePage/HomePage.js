import React from "react";
import { Link } from "react-router-dom";
import UserSuggestion from "../userSuggestion/UserSuggestion";
import Header from "./Header";

export default function HomePage() {
    
  return <div>
    <Header/>
    <Link to='/profile'>Profile</Link>

    <div>
      <UserSuggestion/>
    </div>
  </div>;
}
