import React from 'react'
import AdminLayout from '../../Components/adminPagesCompoents/common/adminLayout'
import UsersTable from '../../Components/adminPagesCompoents/services/UsersTable'
const Users = () => {
  return (
    <>
   <AdminLayout  children={<UsersTable/>}/>

    </>
  )
}

export default Users