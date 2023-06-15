import React from "react";
import { Link } from "react-router-dom";
import UserSuggestion from "../userSuggestion/UserSuggestion";
import Header from "./Header";

export default function HomePage() {
    
  return <div>
    <Header/>
    <div className='page-container'>
            <div>Side Nav
            </div>
            <div>
            </div>
            <div>
                <UserSuggestion/>
            </div>
        </div>
  </div>;
}
