import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import OurGoal from '../components/OurGoal'
import Phone from '../components/Phone'
import HomePageThree from '../components/HomePageThree'
import HomePageFour from '../components/HomePageFour'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        
        <Home/>
        <OurGoal/>
        <div className='min-h-screen'>
        <HomePageThree/>
        </div>

        
        {/* <HomePageFour/> */}
        {/* <Phone /> */}
        <Footer/>
        
    </div>
  )
}

export default HomePage