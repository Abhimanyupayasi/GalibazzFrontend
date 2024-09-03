import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginButton from './Buttons/LoginButton';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

function Login() {
    const [isAuthenticated, setIsAuthenticated] = useState(useSelector((state) => state.auth.isAuthenticated) || false);
    const user = useSelector((state) => state.auth.user) || null;

    const emailVerified = user?.email_verified;
    const dispatch = useDispatch();

    const navigate = useNavigate();
    //console.log(isAuthenticated);


    useEffect(() => {
        if (user ) {
            navigate('/posts');
            
        } else {
            //navigate('/login');
           // dispatch(logout())
        }
    }, [user, navigate]);

    return (
        
        <div className='w-full h-screen flex justify-center items-center'>
            <LoginButton />
        </div>
    );
}

export default Login;