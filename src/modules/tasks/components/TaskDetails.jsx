import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function TaskDetails({item}) {
  const { idTask } = useParams();
  const tasks = useSelector(state => state.taskList)
  const task = tasks.find(task =>task.id === Number(idTask))
  
  return (
    <div>
      <h2 className=' text-center text-yellow-300 text-2xl p-4'> Detalle de Tarea Numero {idTask}  </h2>
      <p className=' text-center text-cyan-300 text-lg p-2'> {task.todo} </p>
    </div>
  )
}
