import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../../../data/userIndex'
const Categories = () => {
    return (
        <section className=' w-full   '>
            <div className=' lg:mx-15 pt-10 flex flex-col  justify-center'>
                <div className='flex justify-between items-center text-cyan-800 p-6'>
                    <h4>Categories</h4>
                    <p className='font-bold'>See All</p>
                </div>
                <div className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-1 gap-6 p-6 sm:w-full ">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            title={category.title}
                            link={category.Link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories