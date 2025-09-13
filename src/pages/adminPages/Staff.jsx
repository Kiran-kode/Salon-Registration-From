import React from 'react'
import AdminLayout from '../../Components/adminPagesCompoents/common/adminLayout'
import StaffTable from '../../Components/adminPagesCompoents/services/StaffTable'
const Staff = () => {
  return (
    <>
    <AdminLayout children={<StaffTable />}/>
    </>
  )
}

export default Staff