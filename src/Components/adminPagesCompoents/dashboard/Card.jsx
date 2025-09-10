import React from 'react'

const Card = ({ count, heading }) => {
  return (
    <>
    <div className='bg-white rounded flex-1 px-2 py-4 md:mb-3'>
        <h1 className='font-bold text-2xl '> {count}</h1>
        <p className='text-gray-500 font-semibold'>{heading}</p>
    </div>
    </>
  )
}

export default Card