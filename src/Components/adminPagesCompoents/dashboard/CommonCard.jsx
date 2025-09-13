import React from 'react'
const CommonCard = ({ amount, text }) => {
  return (
    <div className='bg-white rounded flex-1 px-2 py-4 md:mb-4'>
        <h1 className='font-bold text-2xl'> {amount}</h1>
        <p className='text-gray-500 font-semibold'>{text}</p>
    </div>
  )
}

export default CommonCard