import React from 'react'

const TopRatedCard = ({Link, img, heading, subHeading, para}) => {
  return (
    <>
     <div href={Link}

     className='w-full   h-100  mb-5 flex flex-col items-center rounded-lg shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] hover:-translate-y-3 hover:transform-ease duration-200'>
                        <img src={img} className='w-full h-60 rounded-t-lg object-cover' />

                        <div className='h-full flex flex-col items-center justify-evenly'>
                            <h2 className='font-bold text-xl'>{heading}</h2>
                            <p className=' text-base'>{subHeading}</p>
                            <p>{para} </p>
                            <div className=' w-full flex items-center gap-3'>
                                <button className='rounded-md bg-[#156779] px-1.5 py-0.5  hover:bg-cyan-500 transition-ease duration-200 text-white'>See more</button>
                                <button className='rounded-md bg-[#c3a276] px-1.5 py-0.5 hover:bg-cyan-500 transition-ease duration-200 text-white'>Top Rated</button>
                                
                            </div>
                        </div>
                    </div>
    
    </>
  )
}

export default TopRatedCard