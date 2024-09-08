import React from 'react'
import FetchPosts from '../components/FetchPosts'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

function AllPostPage() {
  const user = useSelector((state) => state.auth.user) || null
  const emailVerified = user?.email_verified;

    
  return (
    <div>
      {
        emailVerified === true ? (
          <>
          <div className='w-full justify-center flex items-center'>
          <Link to="/create-post">
          <button className="btn btn-success">Create Post</button></Link>
          </div>
          
        
        </>
        ) : (
<div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Verify Email For creating posts</span>
</div>
        )
      }
        
        
        <FetchPosts/>
        {/* <Footer/> */}
    </div>
  )
}

export default AllPostPage