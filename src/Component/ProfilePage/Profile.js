import React from 'react'
import Header from '../HomePage/Header'
import "./Profile.css"
import ProfileDetail from './ProfileCard'

export default function Profile() {
  return (
    <div className='profile-page'>
        <Header/>
        <div className='page-container'>
            <div>Side Nav
            </div>
            <div>
                <ProfileDetail/>
            </div>
            <div>
                Suggestion
            </div>
        </div>
    </div>
  )
}
