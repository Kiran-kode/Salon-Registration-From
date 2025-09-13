import React from 'react'
const Footer = () => {
  return (
    <div className='bg-[#156779] flex flex-col items-center text-white pb-2  '>
      <div className=' border-b-1 border-b-black mx-4 mb-8 md:flex flex-wrap md:pt-10'>
        <div className='flex flex-col gap-2  mb-7 mx-11 text-base md:w-50 '>
          <img src="https://cutxpress.life/asset/img/logo.svg" className='w-30 h-30 bg-amber-100' />
          <p>Veritatis consectetur voluptatum class officia tenetur dictumst sequi pulvinar, itaque dolorem que litora eius</p>
        </div>
        <div className='  flex flex-col gap-2  mb-7 mx-11'>
          <h1 className='font-semibold text-2xl'>Quick Links</h1>
          <ul className='flex flex-col gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='mx-11 flex flex-col gap-2  mb-7'>
          <h1 className='font-semibold text-2xl'>Services</h1>
          <ul className='flex flex-col gap-2'>
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Road Freight</li>
            <li>Warehouse</li>
            <li>Transport</li>
          </ul>
        </div>
        <div className='mx-11 flex flex-col gap-2 mb-7 '>
          <h1 className='font-semibold text-2xl'>Contact Us</h1>
          <ul className='flex flex-col gap-2'>
            <li >Arlington Business Park <br />
              Road London NW92 1WY</li>
            <li>+1 (145) 569-745</li>
            <li>info@cutxpress.com</li>
            <li>blog</li>
            <li>Fax:(+01)236-596-44</li>
          </ul>
        </div>

      </div>
      <p className='mx-4'>Copyright © 2025 Cut Xpress. Powered By CutXpress.</p>
    </div>
  )
}

export default Footer