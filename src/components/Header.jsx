import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import ProfilePicture from './ProfilePicture';
import LoginButton from './Buttons/LoginButton';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [picture, setPicture] = useState('');
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userfromState = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userfromState) {
      setUser(userfromState);
      setIsAuthenticated(true);
      setPicture(userfromState.picture);
    }
  }, [userfromState]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/posts');
    }
  }, [isAuthenticated, navigate]);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const backgroundColor = 'bg-gray-800';
  const textColor = 'text-gray-100';

  return (
    <div>
      <header className={`${backgroundColor} ${textColor} fixed w-full border-b-2 border-white z-50`}>
        <nav className="container mx-auto p-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Logo />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0zM0 15h20v2H0z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}
          >
            <div className="lg:flex-grow w-full lg:gap-12 lg:flex lg:justify-center">
              <Link to='/' onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                Home
              </Link>
              <Link to='/about' onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                About
              </Link>
              <Link to='/contact' onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                Contact Us
              </Link>
              <Link to='/blog' onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                Blogs
              </Link>
            </div>
            <div className="flex gap-5 mt-3 lg:items-center lg:mt-0">
              <LoginButton />
              <ProfilePicture image={picture} img='' />
            </div>
          </div>
        </nav>
      </header>
      <div className='h-20'></div>
    </div>
  );
};

export default Header;
