import React from 'react'
import KosmetikCards from './CommonCards'
import { FriseurCards } from '../../../../data/userIndex'
const Friseur = () => {



  return (
    <>
     <section className=' w-full'>
        
                    <div className='mx-7 lg:mx-15  flex flex-col  justify-center'>
                        <div className='flex justify-between items-center text-cyan-800 p-6'>
                            <h4>Friseur</h4>
                            <p className='font-bold'>See All</p>
                        </div>
    <div className='grid place-items-center gap-13 md:gap-5 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 '> 
        {FriseurCards.map(( card, index)=>(
            <KosmetikCards 
            key={index}
            img={card.img}
            heading={card.heading}
            subHeading={card.subHeading}
            para={card.para}
            /> 
            
        ))}
    </div>
           </div>
    
                </section>
    
    </>
  )
}

export default Friseur