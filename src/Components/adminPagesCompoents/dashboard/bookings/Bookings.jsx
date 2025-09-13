import React from 'react'
import BoxTemplate from './BoxTemplate'
import { bookingPeriods } from '../../../../data/adminIndex'
const Bookings = () => {
  return ( 
<section className='w-full flex-col mt-'>
    <h1 className='text-2xl font-bold text-gray-500 mb-2'>Bookings</h1>
    <div className='flex flex-col  md:flex-row gap-5 md:items-center '>
      {bookingPeriods.map(period => (
        <BoxTemplate key={period.id} heading={period.heading} total={period.total} pending={period.pending} accepted={period.accepted} completed={period.completed} canceled={period.canceled} declined={period.declined} />
      ))}
    </div>
</section>
  )
}

export default Bookings