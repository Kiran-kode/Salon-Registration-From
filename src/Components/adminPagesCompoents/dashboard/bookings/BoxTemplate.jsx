import React from 'react'
const BoxTemplate = ({heading, total, pending, accepted, completed, canceled, declined}) => {
  return (
     <div className='md:w- h-fit rounded  flex flex-col gap-2 p-2  bg-white sm:w-[60%] mb-3'>
        <h1 className='text-cyan-700 font-bold'>{heading}</h1>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500'>
            <span className='text-sm'>Total:</span>
            <span className='font-semibold text-sm'>{total}</span>
        </div>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500'>
            <span className='text-sm'>Pending:</span>
            <span className='font-semibold text-sm'>{pending}</span>
        </div>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500'>
            <span className='text-sm'>Accepted:</span>
            <span className='font-semibold text-sm'>{accepted}</span>
        </div>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500'>
            <span className='text-sm'>Completed:</span>
            <span className='font-semibold text-sm'>{completed}</span>
        </div>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500'>
            <span className='text-sm'>Canceled:</span>
            <span className='font-semibold text-sm'>{canceled}</span>
        </div>
        <div className='bg-gray-200 rounded flex justify-between p-1 text-gray-500 '>
            <span className='text-sm'>Declined:</span>
            <span className='font-semibold text-sm'>{declined}</span>
        </div>
    </div>
  )
}

export default BoxTemplate