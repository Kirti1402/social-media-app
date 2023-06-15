import React from 'react'
import ProfileCard from './ProfileCard'
import UserPost from '../Post/UserPost'

export default function ProfileTimeLine() {
  return (
    <div className='profile-timeline'> <ProfileCard/>
    <UserPost/>
    </div>
  )
}
