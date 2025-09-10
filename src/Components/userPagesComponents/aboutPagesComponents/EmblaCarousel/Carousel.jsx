import React from 'react'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Carousel = () => {
  return (
   <>
   
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />

   </>
  )
}

export default Carousel