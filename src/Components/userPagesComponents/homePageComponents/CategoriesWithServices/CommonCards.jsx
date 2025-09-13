import React from 'react'

const KosmetikCards = ({ Link, img, heading, subHeading }) => {
  return (
    <>
      <div href={Link}
        className='w-full   h-90  mb-5 flex flex-col items-center rounded-lg shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] hover:-translate-y-3 hover:transform-ease duration-200'>
        <img src={img} className='w-full h-70 rounded-t-lg object-cover' />
        <div className='h-full flex flex-col items-center justify-evenly'>
          <h2 className='font-semibold text-lg'>{heading}</h2>
          <p className=' text-base'>{subHeading}</p>
        </div>
      </div>

    </>
  )
}

export default KosmetikCards