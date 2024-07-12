import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import Home from '../modules/home/views/Home'
import AboutView from '../modules/home/views/AboutView'
import Servicesview from '../modules/home/views/Servicesview'
import Contactview from '../modules/home/views/Contactview'

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

import AppUserLayout from '../layouts/UserLayout'
import DashboardView from '../modules/user/views/DashboardView'
import ProfileView from '../modules/user/views/ProfileView'
import SettingView from '../modules/user/views/SettingView'


import AppAdminLayout from '../layouts/AppAdminLayout'
import AdminSetting from '../modules/admin/view/AdminSetting'
import ListTask from '../modules/tasks/components/ListTask'
import TaskDetails from '../modules/tasks/components/TaskDetails'

export default function AppRouters() {
  return (
    <Routes>
      {/* Rutas Publicas */}
      <Route element={<HomeLayout/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutView/>} />
        <Route path='/services' element={<Servicesview/>} />
        <Route path='/contact' element={<Contactview/>} />
      </Route>

      {/* rutas de Autenticacion */}
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<RegisterPage/>}  />

      {/* Rutas Internas para APLICACTION INTER => PERFIL USUARIO*/}
      <Route path='/app/user' element={<AppUserLayout/>}  >
        <Route path='dashboard' element={<DashboardView/>} />
        <Route path='profile' element={<ProfileView/>} />
        <Route path='setting' element={<SettingView/>} />
        <Route path='tasks' element={<ListTask/>} />
        <Route path='tasks/:idTask' element={<TaskDetails/>} /> 
        
      </Route>

      {/* Rutas Internas para el Aplicativo Interno => PERFIL ADMIN  */}
      <Route path='/app/admin' element={<AppAdminLayout/>} >
        <Route path='profile' element={<AdminSetting/>} />
      </Route>

    </Routes>
  )
}
