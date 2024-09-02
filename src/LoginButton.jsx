// import React ,{useEffect, useState} from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "./store/authSlice";




// const LoginButton = () => {
//   const { user, loginWithRedirect,getIdTokenClaims } = useAuth0();

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userfromState, setUserfromState, ] = useState(useSelector((state) => state.auth.user) || null);
//   const [picture , setPicture] = useState('');

//   const dispatch = useDispatch();
//   if(user){
//     localStorage.setItem('user', JSON.stringify(user));
//     dispatch(setUser(user));


//      // Adjusted dispatch call
//   }
//   console.log(user);

//   const userWithToken = async () => {
//     try {
//       const token = await getIdTokenClaims();
//       console.log('Token:', token.__raw);
//     } catch (error) {
//       console.error('Error verifying token:', error);
//     }
//   };

//   useEffect(() => {
//     if(userfromState){
     
//       const tokeninit = getIdTokenClaims();
//       console.log('Token:', token.__raw);
//       const token = tokeninit.__raw;
    
//       localStorage.setItem('user', JSON.stringify(user));
//       setUser(
//         user
//       );
//       setIsAuthenticated(true);
//       // Adjusted dispatch call
//       setPicture(userfromState.picture);
//     }
//   }, [userfromState]);
  





//   if(isAuthenticated) return (
//     <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4" onClick={() => loginWithRedirect()}>Log Out</button>
//   );

//   return <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4" onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser as setReduxUser } from './store/authSlice'; // Renamed for clarity

function LoginButton() {
  console.log(useSelector((state) => state.auth.isAuthenticated) || false);
  console.log(useSelector((state) => state.auth.user) || null);
  console.log(useSelector((state) => state.auth.token) || null);
  
  const [isAuth, setIsAuth] = useState(useSelector((state) => state.auth.isAuthenticated) || false);
  const { isAuthenticated, loginWithRedirect, logout, getIdTokenClaims, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTokenAndDispatchUser = async () => {
      if (isAuthenticated && user) {
        setIsAuth(true);
        const tokenClaims = await getIdTokenClaims();
        const userToken = tokenClaims.__raw;
        // Dispatch the user info and token to the Redux store
        dispatch(setReduxUser({ user: user, token: userToken }));
      }
    };

    fetchTokenAndDispatchUser();
  }, [isAuthenticated, user, dispatch, getIdTokenClaims]);

  const handleVerifyToken = async () => {
    try {
      const token = localStorage.getItem('token');
      const severURL = import.meta.env.VITE_API_URL;
      console.log(token);

      const response = await fetch(`${severURL}/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ token: token })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error verifying token:', error);
    }
  };

  return (
    <div>
      {!isAuth ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          <button onClick={handleVerifyToken}>Verify Token</button>
        </>
      )}
    </div>
  );
}

export default LoginButton;