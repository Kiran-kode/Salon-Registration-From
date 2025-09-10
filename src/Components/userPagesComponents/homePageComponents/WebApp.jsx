import React from 'react'

const WebApp = () => {
  return (
    <>
      <div className='sm:flex sm:w-full sm:mx-5 sm:justify-center  md:h-90 bg-[#e6e6e6]  md:flex  md:mx-15 mb-5 md:w-[90%]'>
        <div className='md:w-[50%] flex flex-col justify-center items-center md:gap-6 '>
          <h2 className='font-semibold text-2xl'>CutXpress Web App</h2>
          <p className='p-5 leading-7 md:w-[80%]'>Experience seamless operations with the CutXpress Web App. Download the app to simplify your tasks and boost productivity, available on both Android and iOS.</p>
          <span className='flex justify-evenly sm:gap-5 gap-10 w-full '>
            <img src="https://cutxpress.life/asset/image/play-store.png" className='h-25 w-35 object-contain cursor-pointer' alt="" />
            <img src="https://cutxpress.life/asset/image/play-store.png" className='h-25 w-35 object-contain cursor-pointer' alt="" />
          </span>
        </div>
        <div className='md:w-[50%] flex justify-center sm:justify-center'>
          <img src="https://cutxpress.life/asset/image/unnamed.webp" className='h-90 w-90 object-contain' alt="" />
        </div>
      </div>
    </>
  )
}

export default WebApp