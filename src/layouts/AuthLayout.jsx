// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Outlet } from 'react-router-dom'
// import LoginButton from '../components/Buttons/LoginButton'
// import Logo from '../components/Logo'
// import ProfilePicture from '../components/ProfilePicture'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { useOutletContext } from 'react-router-dom'
// import handleVerifyToken from '../middleware/useApi'
// import toast from 'react-hot-toast'
// import { Toaster } from 'react-hot-toast'
// import ViewEditProfile from '../components/profileComponent/ViewEditProfile'
// import CreatePost from '../components/CreatePost'
// import FetchPosts from '../components/FetchPosts'


// function AuthLayout() {
//   const [showComponent, setShowComponent] = useState(true);
//   const [isTokenValid, setIsTokenValid] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowComponent(false);
//     }, 3000); // Hide the component after 3 seconds

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []); 


//   const [togal, setTogal] = useState('')


//   const token = useSelector((state) => state.auth.token) || null
//   console.log(token);
//   useEffect(() => {



//   handleVerifyToken(token).then((data) => {
   

//     console.log(data);
//     if(data === true){
//       console.log('Token is valid')
//       setTogal('token is valid')
//       setIsTokenValid(true)

//     } else {  
//       console.log('Token is invalid')
//       setTogal('token is invalid')
//       setIsTokenValid(false)
//     }
//   }).catch((error) => {
//     console.error('Error verifying token:', error);
//   });
//   }, [token]);
//   const [user, setUser] = useState(useSelector((state) => state.auth.user) || null)
//   const [picture, setPicture] = useState('')
//   const [isAuthenticated, setIsAuthenticated] = useState(useSelector((state) => state.auth.isAuthenticated) || false)
//   console.log(user.picture);
//   useEffect(() => {
//     if (user) {
//       setUser(user)
//       setIsAuthenticated(true)
//       setPicture(user.picture)
//     }
//   }, [user])


    

//   return (
//     <>
//    {isTokenValid? (
//      <div className="flex flex-col h-screen">
//        <header className="bg-gray-800 text-gray-100 fixed w-full border-b-2 border-white z-50">
//          <div className="container mx-auto flex justify-between items-center p-4">
//            <Link to="/">
//              <Logo />
//            </Link>
//            <nav className="space-x-4 flex">
//              <Link to="/profile">
//                {/* <ProfilePicture picture={picture} /> */}
//                <ProfilePicture image={user.picture}/>
//              </Link>
//              <LoginButton />
//              {
//                 showComponent ?


//                 <div role="alert" className={`alert alert-success fixed left-1/2 w-auto`}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 shrink-0 stroke-current"
//                   fill="none"
//                   viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>{togal}</span>
//               </div> :null
//              }
              
            
//            </nav>
//          </div>
//        </header>
//        <main className="container mx-auto mt-24 flex-grow p-4">
//          <Outlet />
//          {/* <ViewEditProfile/> */}
//          {/* <CreatePost/> */}
//          {/* <FetchPosts/> */}
//        </main>
//      </div> 
//     ) : (
//       <div>
//         <button className="btn btn-error">Your Token Is Not Verified please logout & login Again</button>
//         <LoginButton />
//       </div>
//     )}
//     </>
//   )
// }

// export default AuthLayout

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import LoginButton from '../components/Buttons/LoginButton';
import Logo from '../components/Logo';
import ProfilePicture from '../components/ProfilePicture';
import handleVerifyToken from '../middleware/useApi';
import EmailVerify from '../components/EmailVerify';

function AuthLayout() {
  const [showComponent, setShowComponent] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [togal, setTogal] = useState('');

  const token = useSelector((state) => state.auth.token) || null;
  const user = useSelector((state) => state.auth.user) || null;




  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 3000); // Hide the component after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    setLoading(true);
    handleVerifyToken(token).then((data) => {
      console.log(data);
      if (data === true) {
        console.log('Token is valid');
        setTogal('Successfully Logged In');
        setIsTokenValid(true);
      } else {
        console.log('Token is invalid');
        setTogal('Token is invalid');
        setIsTokenValid(false);
      }
      setLoading(false);
    }).catch((error) => {
      console.error('Error verifying token:', error);
      setLoading(false);
    });
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  const emailVerified = user?.email_verified;
  console.log(emailVerified);



  return (
    <>
    {/* //div will remove after the backend logic is implemented */}
    <div>
      <h1>we are building the project right now, please wait......</h1>
      <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
    </div>
    {
      emailVerified === false ? (
        <div className='w-full flex justify-center items-center'>
          <EmailVerify />
        </div>
        
      ) : (null
      )
    }
    
    
      {isTokenValid ? (
        <div className="flex flex-col h-screen">
          <header className="bg-gray-800 top-0 text-gray-100 fixed w-full border-b-2 border-white z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
              <Link to="/">
                <Logo />
              </Link>
              <nav className="space-x-4 flex">
                <Link to="/profile">
                  <ProfilePicture image={user?.picture} />
                </Link>
                <LoginButton />
                {showComponent && (
                  <div role="alert" className={`alert alert-success fixed left-1/2 w-auto`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{togal}</span>
                  </div>
                )}
              </nav>
            </div>
          </header>
          <main className="container mt-24 mx-auto flex-grow p-4">
            <Outlet />
            {/* Uncomment the components you want to display */}
            {/* <ViewEditProfile /> */}
            {/* <CreatePost /> */}
            {/* <FetchPosts /> */}
          </main>
        </div>
      ) : (
        <div>
          <button className="btn btn-error">Your Token Is Not Verified please logout & login Again</button>
          <LoginButton />
        </div>
      )}
    </>
  );
}

export default AuthLayout;

