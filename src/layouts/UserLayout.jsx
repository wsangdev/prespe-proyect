import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../modules/home/components/NavbarHome'

export default function UserLayout() {
  return (
    <div>
      <NavbarHome/>
      {/* Renderizado de los DashBoard, Profile, Setting */}
      <Outlet/> 
    </div>
  )
} 
  