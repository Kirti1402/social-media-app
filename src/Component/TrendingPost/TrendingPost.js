import React from 'react'
import Header from '../HomePage/Header'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'

export default function TrendingPost() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div>Trending Post</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
