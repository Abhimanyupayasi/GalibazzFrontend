import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/Buttons/LoginButton';
import Logo from '../components/Logo';
import ProfilePicture from '../components/ProfilePicture';
import handleVerifyToken from '../middleware/useApi';
import EmailVerify from '../components/EmailVerify';
import { logout } from '../store/authSlice';
import { GoArrowRight } from "react-icons/go";


function AuthLayout() {
  const [showNotification, setShowNotification] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      try {
        const isValid = await handleVerifyToken(token);
        if (isValid) {
          setNotificationMessage('Successfully Logged In');
          setIsTokenValid(true);
        } else {
          setNotificationMessage('Token is invalid');
          setIsTokenValid(false);
          dispatch(logout());
          localStorage.clear();
          navigate('/');
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, [token, dispatch, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      {user?.email_verified === false && (
        <div className="w-full flex justify-center items-center">
          <EmailVerify />
        </div>
      )}
      
      {isTokenValid ? (
        <div className="flex flex-col h-screen">
          <header className="bg-gray-800 top-0 text-gray-100 fixed w-full border-b-2 border-white z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
              <Link to="/">
                <Logo />
              </Link>
              <nav className="space-x-4 text-lg items-center justify-center flex">
              <GoArrowRight size={25}/>
                <Link to="/profile">
                
                  <ProfilePicture image={user?.picture} />
                  
                </Link>
                <LoginButton />
                {showNotification && (
                  <div role="alert" className="alert alert-success fixed left-1/2 w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0z" />
                    </svg>
                    <span>{notificationMessage}</span>
                  </div>
                )}
              </nav>
            </div>
          </header>
          <main className="container mt-24 mx-auto flex-grow p-4">
            <Outlet />
          </main>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="mb-4 text-center">
            <p className="text-red-500">Your Token Is Not Verified. Please logout and login again.</p>
          </div>
          <LoginButton />
        </div>
      )}
    </>
  );
}

export default AuthLayout;
