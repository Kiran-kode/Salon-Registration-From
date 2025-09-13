import React from 'react'
import { walletRecharge } from '../../../data/adminIndex'
import CommonCard from './CommonCard'
const WalletRecharge = () => {
  return (
     <div>
            <h1 className='text-2xl font-bold text-gray-500 mb-2'>Wallet Recharge</h1>
            <div className='flex flex-col md:flex-row gap-6 w-full '>
              {walletRecharge.map(amount => (
                <CommonCard key={amount.id} amount={amount.amount} text={amount.Day}  />
              ))}
            </div>
           </div>
  )
}
export default WalletRecharge