import React from 'react'
import Header from '../HomePage/Header'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import "./bookmarkedpost.css"

export default function BookMarked() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div div className='bookmarked-page'>bookmarkedPost</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
