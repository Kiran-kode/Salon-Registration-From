import React from 'react'
import CommonCard from './CommonCard'
import { platfromEarning } from '../../../data/adminIndex'
const PlatfromEarning = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-gray-500 mb-2'>Platfrom Earning</h1>
        <div className='flex flex-col md:flex-row gap-6 w-full '>
          {platfromEarning.map(earning => (
            <CommonCard key={earning.id} amount={earning.amount} text={earning.Day}  />
          ))}
        </div>
       </div>
  )
}

export default PlatfromEarning