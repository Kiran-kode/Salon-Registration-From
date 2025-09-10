import React from 'react'
import Bookings from '../../Components/adminPagesCompoents/dashboard/bookings/Bookings'
import Salon from '../../Components/adminPagesCompoents/dashboard/Salon'
import PlatfromEarning from '../../Components/adminPagesCompoents/dashboard/PlatfromEarning'
import Withdrawals from '../../Components/adminPagesCompoents/dashboard/Withdrawals'
import WalletRecharge from '../../Components/adminPagesCompoents/dashboard/WalletRecharge'
const Dashboard = () => {
  return (
    <section className='bg-gray-100   items-center p-5 gap-3'>
      <Bookings />
      <Salon />
      <PlatfromEarning/>
      <Withdrawals/>
      <WalletRecharge/>
    </section>
  )
}

export default Dashboard