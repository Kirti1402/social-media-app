import React from 'react'
import Header from '../HomePage/Header'
import "./Profile.css"
import UserSuggestion from '../userSuggestion/UserSuggestion'
import ProfileCard from './ProfileCard'

export default function Profile() {
  return (
    <div className='profile-page'>
        <Header/>
        <div className='page-container'>
            <div>Side Nav
            </div>
            <div>
                <ProfileCard/>
            </div>
            <div>
                <UserSuggestion/>
            </div>
        </div>
    </div>
  )
}
