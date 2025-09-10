import React from 'react'
import CommonCard from './CommonCard'
import { withdrawals } from '../../../data/adminIndex'
CommonCard
const Withdrawals = () => {
  return (
    <>
     <div >
            <h1 className='text-2xl font-bold text-gray-500 mb-2'>Withdrawals</h1>
            <div className='flex flex-col md:flex-row gap-6 w-full '>
              {withdrawals.map(withdraw => (
                <CommonCard key={withdraw.id} amount={withdraw.amount} text={withdraw.status}  />
              ))}
            </div>
           </div>
    </>
  )
}

export default Withdrawals