import React from 'react'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import Header from '../HomePage/Header'
import "./likedpost.css"
export default function LikedPost() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className='liked-paged'>Liked</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
