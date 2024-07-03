import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import AppLayout from '../layout/AppLayout'
import RegisterPage from '../pages/RegisterPage'
import DashboardView from '../modules/views/DashboardView'
import ProfileView from '../modules/views/ProfileView'
import SettingView from '../modules/views/SettingView'

export default function AppRouters() {
  return (
    <Routes>
      {/* Rutas generales para todo el Publico */}
      <Route path='/' element={<HomePage/>}  />
      <Route path='/login' element={<LoginPage/>}  />
      <Route path='/register' element={<RegisterPage/>}  />

      {/* Rutas Internas dentro de la APLICACION REAL*/}
      <Route path='/app' element={<AppLayout/>}  >
        <Route path='dashboard' element={<DashboardView/>} />
        <Route path='profile' element={<ProfileView/>} />
        <Route path='setting' element={<SettingView/>} />
      </Route>
    </Routes>
  )
}
