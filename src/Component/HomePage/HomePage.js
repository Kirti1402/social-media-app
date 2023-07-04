import React from "react";
import UserSuggestion from "../userSuggestion/UserSuggestion";
import Header from "./Header";
import "./home.css";
import SideNavigation from "../SideNavigation/SideNavigation";
import User from "../HomePage/User"
import HomeAllPost from "../Post/HomeAllPost";
import Explore from "../Explore/Explore";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className="home-page"><User/></div>
        {/* <div className="home-page"><Explore/></div> */}
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  );
}
