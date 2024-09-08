import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


const Wrapper = () => {
    return (
        <div>
       
        <Outlet />
        
        </div>
    )
    }

export default Wrapper