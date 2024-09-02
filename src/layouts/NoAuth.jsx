import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function NoAuth() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

export default NoAuth