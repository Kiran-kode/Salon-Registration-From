

import React from 'react'
import { FaStar } from "react-icons/fa6";

const SalonServiceCard = ({ 
title,
barber,
originalPrice,
discountedPrice,
info,

  imageUrl, 
  serviceType, 
  providerName, 
  description, 
  rating = 0.0,
  distance, 
  onBookService,
  buttonText = "Book a Service"

}) => {
    
    return (
        <>
        
<section className='flex justify-center px-5'>
    <div className='flex-col  md:w-1/2 sm:mx-4  my-4 sm:text-center md:text-start'>
   <div className=' flex md:gap-2 '>
    <button className='bg-[#2f97a3] text-white p-1 px-4 rounded-3xl'>Male</button>
    <button className='bg-[#2f97a3] text-white p-1 px-4 rounded-3xl'>30 min</button>
   </div>
    <h1 className='font-semibold'>{title}</h1>
    <p>{barber}</p>
    <div className='w-30 flex justify-between '>
        <span className='text-red-500 font-semibold line-through'>€{originalPrice}</span>
        <span className='text-black font-semibold'>€{discountedPrice}</span>
    </div>
    <p>{info}</p>
    <p className='text-cyan-700'>Offered By</p>
    </div>
    </section>







            <section className='flex flex-col items-center px-5 mb-4 gap-3'>
                <div className='shadow-2xl rounded-xl w-[95%] md:w-1/2 flex flex-col min-[375px]:flex-row min-[375px]:justify-start justify-center items-center gap-5 p-4'>
                    <div className='flex justify-center'>
                        <img 
                            src={imageUrl || "https://cutxpress.life/storage/uploads/g9mK7ffJgT89PcQYB8A3LkFznCDnOSAHdbhy8Fsp.jpg"} 
                            className='rounded-lg w-16 h-12 mx-2 mb-3 object-cover' 
                            alt={`${serviceType} service`}
                        />
                    </div>
                    <div className='flex flex-col min-[375px]:flex min-[375px]:items-start items-center justify-center'>
                        <p className='font-semibold text-cyan-700'>{serviceType} </p>
                        <p>{providerName}</p>
                        <p className='text-gray-300'>{description}</p>
                        <div className='min-[375px]:flex-row flex flex-col gap-3'>
                            <p className='bg-[#f5ad6e] flex items-center gap-2 px-1 rounded-2xl text-[#ffd700]'>
                                {rating} <FaStar className='h-5 w-5'/> 
                            </p>
                            <p>{distance}</p>
                        </div>
                    </div>
                </div>
                <button 
                    className='bg-cyan-800 text-white py-3 px-5 md:px-9 lg:px-15 rounded-2xl'
                    onClick={onBookService}
                >
                    {buttonText}
                </button>
            </section>
        </>
    )
}

export default SalonServiceCard