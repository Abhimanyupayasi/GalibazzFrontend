import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import ProfilePicture from './ProfilePicture';
import LoginButton from './Buttons/LoginButton';
import { useSelector } from 'react-redux';
import { setUser } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [picture , setPicture] = useState('');
 const [user, setUser] = useState(null);



 const userfromState = useSelector((state) => state.auth.user);


const [isAuthenticated, setIsAuthenticated] = useState(false);







const navigate = useNavigate();


  useEffect(() => {
    if(userfromState){

     // localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      // Adjusted dispatch call
      setPicture(userfromState.picture);




    }
  }, [userfromState]);







console.log(user);
console.log(picture);
if(isAuthenticated){
  navigate('/posts');
}



  // Define colors here
  const backgroundColor = 'bg-gray-800';
  const textColor = 'text-gray-100';

  


  return (
    <div>
        <header className={`${backgroundColor} ${textColor} fixed w-full border-b-2 border-white z-50`}>

      
<nav className="container mx-auto p-4 flex flex-wrap items-center justify-between">
  <div className="flex  items-center flex-shrink-0 mr-6">
    <Logo/>
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
    
      <a  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
      <Link to='/'>Home</Link>
      </a>
      <a  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
      <Link to='/about'>About</Link>
      </a>
      <a  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
       <Link to='/contact'>Contact Us</Link>
      </a>
      <a  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
       <Link to='/blog' >Blogs</Link>
      </a>
    </div>
    <div className="flex gap-5 lg:items-center">
      <LoginButton/>
      {/* <a href="#login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4">
        Login
      </a> */}
      {/* <a href="#signup" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
        Sign Up
      </a> */}
      <ProfilePicture image={picture} img=''/>
    </div>
  </div>
</nav>
</header>
 <div className='h-20'>

</div> 
    </div>
    
  );
};

export default Header;
