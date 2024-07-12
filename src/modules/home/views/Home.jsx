import React from 'react'
import { Button } from '@nextui-org/react'
import { FaUser } from 'react-icons/fa'

export default function Home() {
  return (
    <div className=' text-center'>
      <h1 className=' text-purple-500 text-3xl text-center h-10'> panel publico de la apliacion </h1>
      <Button color='secondary' variant='shadow' radius='sm' className='px-10 my-10'> 
        <FaUser/> Login
      </Button>
    </div>
  )
}
