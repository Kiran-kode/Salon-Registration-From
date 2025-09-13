import React from 'react'
import TopRatedCard from './TopRatedCard'
import { TopRatedCards } from '../../../data/userIndex'
const TopRated = () => {
    return (<section className=' w-full   '>
            <div className='mx-7 lg:mx-15 pt-10 flex flex-col  justify-center'>
                <div className='flex justify-between items-center text-cyan-800 p-6'>
                    <h4>Top Rated Salons</h4>
                    <p className='font-bold'>See All</p>
                </div>
                <div className='grid place-items-center gap-13 md:gap-5 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 '>
                    {TopRatedCards.map((card, index) => (
                        <TopRatedCard
                            key={index}
                            img={card.img}
                            heading={card.name}
                            subHeading={card.location}
                            para={card.distance}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopRated