import React from 'react'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import Header from '../HomePage/Header'

export default function LikedPost() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div>Liked</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
