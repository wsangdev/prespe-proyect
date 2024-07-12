import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemTask({ task }) {
  return (
    <Link  to={`/app/user/tasks/${task.id}`}>
      <li className=' bg-blue-800 text my-4 rounded-md p-2 w-1/2'> Tarea Nro: {task.id} </li>
    </Link>
  )
}
