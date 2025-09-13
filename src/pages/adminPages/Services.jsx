import React from 'react'
import ServicesTable from '../../Components/adminPagesCompoents/services/ServicesTable'
import AdminLayout from '../../Components/adminPagesCompoents/common/adminLayout'

const Services = () => {
  return (
    <>
    <AdminLayout children={<ServicesTable/>}/>
    </>
  )
}

export default Services