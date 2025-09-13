
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { slides } from '../../../data/userIndex';
const Slide = ({ image, simpleText, heading, paragraph, price, buttonText, alignment }) => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center relative flex items-center transition-all duration-500"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Blackish overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 md:px-4 lg:px-19 flex flex-col ${
          alignment === 'left' ? 'items-start text-left' : 'items-center text-center'
        }`}
      >
        {/* Simple text */}
        <p className="text-lg text-cyan-700 tracking-wider">{simpleText}</p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 font-fair  pb-4  border-b">
          {heading}
        </h1>

        {/* Small paragraph */}
        <p className="text-base text-gray-200 mt-4 max-w-md">{paragraph}</p>

        {/* Price */}
        <p className="text-3xl text-cyan-700 font-base mt-4">{price}</p>

        {/* Button */}
        <button className="w-60 h-11 text-cyan-700 outline-2 border-cyan-700 hover:bg-cyan-800 hover:text-white hover:font-normal transition duration-200 ease-in mt-6">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newIndex = prev === 0 ? slides.length - 1 : prev - 1;
      return newIndex;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newIndex = prev === slides.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };
  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Slide {...slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-cyan-700 hover:bg-cyan-800 p-3 rounded-full transition duration-200 z-20"
        onClick={prevSlide}
      >
        <FiChevronLeft size={24} />
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-cyan-700 hover:bg-cyan-800 p-3 rounded-full transition duration-200 z-20"
        onClick={nextSlide}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;