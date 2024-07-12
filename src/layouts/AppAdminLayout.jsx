import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AppAdminLayout() {
  return (
    <div>
      <h1 className=' text-xl'> Navbar para el admin </h1>
      {/* Configuracion de las demas rutas del ADMIN */}
      <Outlet/>
    </div>
  )
}
