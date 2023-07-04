import React from 'react'
import Header from '../HomePage/Header'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import HomeAllPost from '../Post/HomeAllPost'

export default function Explore() {
  return (
    <div>
      <Header/>
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className='liked-paged'><HomeAllPost/></div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}

