import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function IntroButton() {
  const naviagte = useNavigate();
const token = useSelector((state) => state.auth.token);

 const navigateToGali  = () => {
    if(token){
      naviagte('/galiya')
    }else {
      naviagte('/gali')
    }
  }
  return (
    <div className='mb-5'>

     

<div  onClick={navigateToGali} role="alert" className="max-w-[350px] cursor-pointer p-2 bg-indigo-800 rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
  <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
  <span className="font-semibold mr-2 text-left flex-auto">Master 100+ Galiya in Just 1 Day!</span>
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
</div>

    </div>
  )
}

export default IntroButton