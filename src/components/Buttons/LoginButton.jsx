import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken, logout } from '../../store/authSlice';
import Cookies from 'js-cookie';


const LoginButton = () => {
  const dispatch = useDispatch();
    
  const [isAuthenticated, setIsAuthenticated] = useState(useSelector((state) => state.auth.isAuthenticated) || false);
  const [userFromState, setUserFromState] = useState(useSelector((state) => state.auth.user) || null);
    const [tokenFromState, setTokenFromState] = useState(useSelector((state) => state.auth.token) || null);
 

  const { loginWithRedirect, logout: authLogout, getIdTokenClaims, user } = useAuth0();

  const loginHandler = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      //console.error('Error during login:', error);
    }
  };

  

  const logoutHandler = () => {
    authLogout({ returnTo: window.location.origin });
    dispatch(logout());
  };

  useEffect(() => {
    if (user) {
      setUserFromState(user);
      dispatch(setUser(user)); // Dispatching user to Redux state
      getIdTokenClaims().then(token => {
        dispatch(setToken(token.__raw));
        setTokenFromState(token.__raw);
        setIsAuthenticated(true);
        Cookies.set('auth_token', token.__raw, { secure: true, sameSite: 'Strict' });
         // Dispatching token to Redux state
      }).catch(error => {
        //console.error('Error getting token claims:', error);
      });
      
    }
  }, [user, dispatch, getIdTokenClaims]);

  useEffect(() => {
    //console.log('User:', userFromState);
    //console.log('IsAuthenticated:', isAuthenticated);
    //setIsAuthenticated(isAuthenticated);
    if (userFromState && tokenFromState) {
        setIsAuthenticated(true);
        
    }
    //setIsAuthenticated(true);
    setToken(tokenFromState);
    setUserFromState(userFromState);
  }, [userFromState, isAuthenticated]);

  useEffect(() => {
    //console.log('Token:', tokenFromState);
    setTokenFromState(tokenFromState);
  } , [tokenFromState]);

  const token = Cookies.get('auth_token');
  //console.log('Token from cookie:', token);
  //console.log(useSelector((state) => state.auth.isAuthenticated) || false);
    //console.log(useSelector((state) => state.auth.user) || null);
   // console.log(useSelector((state) => state.auth.token) || null);
  return (
    <div>
      {isAuthenticated ? (
        <button className="btn text-nowrap btn-active text-gray-100 h-8 btn-primary" onClick={logoutHandler}>
          Log Out
        </button>
      ) : (
        <button className="btn text-nowrap btn-active text-gray-100 h-8 btn-primary" onClick={loginHandler}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
