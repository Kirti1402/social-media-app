import React from 'react'
import Header from '../HomePage/Header'
import "./Profile.css"
import UserSuggestion from '../userSuggestion/UserSuggestion'
import ProfileTimeLine from './ProfileTimeLine'

export default function Profile() {
  return (
    <div className='profile-page'>
        <Header/>
        <div className='page-container'>
            <div>Side Nav
            </div>
            <div>
                <ProfileTimeLine/>
            </div>
            <div>
                <UserSuggestion/>
            </div>
        </div>
    </div>
  )
}
