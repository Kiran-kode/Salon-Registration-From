import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ( {title, link}) => {
  return (
     <Link to={link}
    className="flex flex-col items-center justify-center bg-[#c0d4d8] p-2 m-2 rounded-lg hover:-translate-y-3 hover:transform-ease duration-200 ">
        <img src="https://cutxpress.life/asset/img/upload/category/tatoo.jpeg"  className='  w-[70%] h-[70%] object-contain mix-blend-darken'/>
        <h2 className='text-white text-xl'>{title}</h2>
    </Link>
  )
}

export default CategoryCard