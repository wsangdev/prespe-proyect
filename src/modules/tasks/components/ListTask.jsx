import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../../../store/slices/taskSlice';
import ItemTask from './ItemTask';

export default function ListTask() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.taskList)

  useEffect(() => {
    getTask()
  }, [])

  const getTask = async () => {
    const uriTodo = `https://dummyjson.com/todos`
    const response = await axios.get(uriTodo)
    dispatch(setTask(response.data.todos))
  }

  return (
    <div>
      <h1 className=' text-center text-pink-500 text-3xl p-4'> Lista de Tareas </h1>
      <ul>
        {tasks.map(item => (
            <ItemTask key={item.id} task={item} />
        ))}
      </ul>
    </div>
  )
}
