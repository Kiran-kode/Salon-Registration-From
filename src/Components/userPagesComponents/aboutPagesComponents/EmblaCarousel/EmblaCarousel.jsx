import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { salonImages } from '../../../../data/userIndex'
const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="max-w-4xl mx-auto ">
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {salonImages.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
              <div className="h-64 md:h-80 lg:h-96 bg-gradient-to-br   flex items-center justify-center text-white text-4xl md:text-6xl font-bold  mx-2">
                {index + 1}
                <img src={image.src} alt={`Salon ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rotate-[45deg] transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-cyan-800 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
