import React from 'react'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import Header from '../HomePage/Header'
import "./likedpost.css"
import LikedPost from './LikedPost'
export default function LikedPage() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className='liked-paged'><LikedPost/></div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
