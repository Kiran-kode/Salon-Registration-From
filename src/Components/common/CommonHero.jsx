import React from 'react'

const CommonHero = (props) => {
  const { title, imageUrl } = props
  return (
      <section className='w-full h-64 md:h-96 lg:h-[500px] xl:h-[600px] relative'>
        <img
          src={imageUrl}
          alt="Modern beauty salon interior"
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='absolute inset-0 flex items-center justify-center px-4'>
          <h1 className='text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center'>
            {title}
          </h1>
        </div>
      </section>
  )
}

export default CommonHero