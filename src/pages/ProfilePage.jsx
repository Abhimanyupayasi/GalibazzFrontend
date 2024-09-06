import React from 'react'
import ViewEditProfile from '../components/profileComponent/ViewEditProfile'
import ProfilePostFetch from '../components/ProfilePostFetch'

function ProfilePage() {
  return (
    <div>
        <ViewEditProfile/>
        <ProfilePostFetch/>
    </div>
  )
}

export default ProfilePage