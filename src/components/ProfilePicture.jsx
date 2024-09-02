import React from 'react'

function ProfilePicture({image, style}) {
  style = style || 'h-12 w-12'
  return (
    <div className={`${style} p-[1px] rounded-full bg-white`}>
        <img className='h-full w-full rounded-full' src={image} alt="" />
    </div>
  )
}

export default ProfilePicture