import React from 'react'
import Header from '../HomePage/Header'
import SideNavigation from '../SideNavigation/SideNavigation'
import UserSuggestion from '../userSuggestion/UserSuggestion'
import "./trendingpost.css"
export default function TrendingPost() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div>
          <SideNavigation />
        </div>
        <div className='trending-page'>Trending Post</div>
        <div>
          <UserSuggestion />
        </div>
      </div>
    </div>
  )
}
