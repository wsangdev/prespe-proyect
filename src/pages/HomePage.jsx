import { Button } from '@nextui-org/react'
import { FaUser } from 'react-icons/fa'

import React from 'react'

export default function HomePage() {
  return (
    <div>
      <h1 className=' text-blue-900 text-2xl'> panel publico de la apliacion </h1>
      <Button color='danger' variant='shadow' radius='sm' className=' text-white px-8'> 
        <FaUser/> Usuario
      </Button>
    </div>
  )
}
