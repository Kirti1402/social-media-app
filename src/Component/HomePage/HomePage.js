import React from "react";
import UserSuggestion from "../userSuggestion/UserSuggestion";
import Header from "./Header";
import "./home.css";
import SideNavigation from "../SideNavigation/SideNavigation";
import HomeAllPost from "../Post/HomeAllPost";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className="home-page"><HomeAllPost/></div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  );
}
