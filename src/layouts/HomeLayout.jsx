import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <div>
      <header> public header </header>
      <main>
        <Outlet/>
      </main>
      <footer> footer layuout </footer>
    </div>
  )
}
