import React from 'react'
import AdminLayout from '../../Components/adminPagesCompoents/common/adminLayout'
import BookingsTable from '../../Components/adminPagesCompoents/services/BookingsTable'

const Bookings = () => {
  return (
   <>
   <AdminLayout children={<BookingsTable />}/>
   </>
  )
}

export default Bookings