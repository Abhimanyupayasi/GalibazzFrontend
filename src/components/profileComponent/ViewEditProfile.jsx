import React from 'react'
import DivInformation from './DivInformation'
import { useSelector } from 'react-redux'
import ProfilePicture from '../ProfilePicture'
import ProfilePostFetch from '../ProfilePostFetch'

function ViewEditProfile() {

  const name = useSelector((state) => state.auth.user.name) || null
  const email = useSelector((state) => state.auth.user.email) || null
  const image = useSelector((state) => state.auth.user.picture) || null



  return (
    <>
    <div className='w-full py-4 flex items-center justify-center bg-gray-800'>
      <div className='w-9/12  flex justify-around items-center'>
      <div className='w-1/2'>
        <ProfilePicture style={`w-1/3`} image={image}/>
      </div>
      <div>
      <DivInformation item={name}/>
      <DivInformation item={email}/>
      <DivInformation item='Galibazz User'/>

      </div>


      </div>
    </div>
    {/* <ProfilePostFetch/> */}
    </>
  )
}

export default ViewEditProfile