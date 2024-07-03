import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/app/dashboard" > DashBoard </Link>
            <Link to="/app/profile" > Profile </Link>
            <Link to="/app/setting" > Setting </Link>
          </li>
        </ul>
      </nav>

      {/* Renderizado de los DashBoard, Profile, Setting */}
      <Outlet/> 
    </div>
  )
} 
  