import React from "react";
import UserSuggestion from "../userSuggestion/UserSuggestion";
import Header from "./Header";
import "./home.css";
import SideNavigation from "../SideNavigation/SideNavigation";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div>Home</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  );
}
