import React from 'react'
import Card from './Card'
import { salonData } from '../../../data/adminIndex'
const Salon = () => {
  return (
   <>
   <div>
    <h1 className='text-2xl font-bold text-gray-500 mb-2'>Salons</h1>
    <div className='flex flex-col md:flex-row gap-6 w-full '>
      {salonData.map(salon => (
        <Card key={salon.id} count={salon.number} heading={salon.status}  />
      ))}
    </div>
   </div>
   </>
  )
}

export default Salon