import React from 'react'
import { Link } from 'react-router-dom'
import "./sidenavigation.css"

export default function SideNavigation() {
  return (
    <div className='sideNavigation-container'>
        <Link  className="link" to="/">Home</Link>
        <Link  className="link" to="/explore">Explore</Link>
        <Link className="link" to="/likedPost">Liked</Link>
        <Link className="link" to="/bookmarkedPost">Bookmarked</Link>
    </div>
  )
}
