import React from 'react'
import AdminLayout from '../../Components/adminPagesCompoents/common/adminLayout'
import SalonsTable from '../../Components/adminPagesCompoents/services/SalonsTable'
const Salons = () => {
  return (
    <>
   <AdminLayout  children={<SalonsTable/>}/>

    </>
  )
}

export default Salons