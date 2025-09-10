import React from 'react';
import Header from '../../common/Header';
import { IoDiamondOutline } from "react-icons/io5";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { GiWineGlass } from "react-icons/gi";
import Footer from '../../common/Footer';
import Carousel from './EmblaCarousel/Carousel';
import Button from '../../common/Button';
import CommonHero from '../../common/CommonHero';

const AboutPageComponents = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <Header />

        {/* Hero Section - Mobile centered, md+ same as lg */}
        {/* <CommonHero title="About Us" imageUrl="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" /> */}


        <CommonHero title="About Us" imageUrl="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" />


        <section className="about-story w-full">
          <div className="bg-yellow-900 ">
            <div className="w-full md:px-0  sm:px-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full  ">

                {/* Left Side */}
                <div className="about-story__slides bg-gray-900  ">
                  <div
                    className="about-story__slide relative h-80 sm:h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://cutxpress.life/asset/img/upload/about/story_man.png')" }}
                  >
                    <figure className="about-story__img hidden sm:block">
                      <img
                        src="./CutXpressAbout_files/story_man.png"
                      />
                    </figure>
                    <h3 className="about-story__name hidden sm:block absolute bottom-[50%] right-10 text-white text-lg font-semibold">
                      Robert Anderson
                      <small className="block text-sm text-gray-300">Ceo</small>
                    </h3>
                   
                    {/* <div className=' sm:hidden md:block h-10 w-10 color-white bg-[#333333] absolute bottom-[50%] left-135 rotate-45 '></div> */}
                  </div>
                </div>

                {/* Right Side */}
                <div className="sm:col-start-2 md:h-full">
                  <article className="bg-[#333333] text-white h-full shadow-md p-6 sm:p-8 ">
                    <header>  
                      <h2 className="text-3xl font-bold mb-4">Our Short Story</h2>
                      <h3 className="about-story__name sm:hidden text-lg font-medium mb-2">
                        Robert Anderson
                        <small className="block text-sm text-gray-500">Ceo</small>
                      </h3>
                    </header>
                    <div className="space-y-4 text-white ">
                      <p>
                        Certain but she but shyness why cottage. Gay the put
                        instrument sir entreaties affronting. Pretended exquisite
                        see cordially the you. Weeks quiet do vexed or whose.
                      </p>
                      <p>
                        By impossible of in difficulty discovered celebrated ye.
                        Justice joy manners boy met resolve produce. Bed head loud
                        next plan rent had easy add him. As earnestly shameless
                        elsewhere defective estimable fulfilled of. Esteem my advice
                        it an excuse enable.
                      </p>
                    </div>
                    <footer className="grid grid-cols-1 sm:grid-cols-2 gap-6  text-center mt-6">
                      <div>
                        <div className="text-3xl text-cyan-700">
                          <span className="js-counter">52</span>
                        </div>
                        <div className="text-sm text-white">
                          people staff are working
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl  text-cyan-700">
                          <span className="js-counter">192</span>
                        </div>
                        <div className="text-sm text-white">
                          guests are staying in hotel now
                        </div>
                      </div>
                    </footer>
                  </article>
                </div>

              </div>
            </div>
          </div>
        </section>










        {/* Services Cards Section - Mobile centered, md+ same as lg */}
        <section className='w-full px-4 md:px-6 lg:px-8 py-8 md:py-16'>
          <div className='max-w-7xl mx-auto'>
            {/* <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6   lg:gap-10'> */}
            <div className='flex flex-col md:flex-row gap-6   lg:gap-10'>

              {/* Premium Rooms Card */}
              <div className='w-full h-auto min-h-[300px] md:min-h-[350px] border border-gray-200 flex flex-col items-center text-center justify-center gap-3   md:gap-4 bg-gray-50 p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg'>
                <IoDiamondOutline className='h-10 w-10 md:h-14 md:w-14 text-cyan-800' />
                <h3 className='text-lg md:text-2xl font-semibold'>Premium Rooms</h3>
                <RiPokerDiamondsFill className='text-cyan-800 text-sm md:text-base' />
                <p className='text-sm md:text-lg leading-relaxed px-2'>
                  Comfort & clean suites with king-size beds. Brand-new furniture and complimentary living kit
                </p>
              </div>

              {/* Concierge Service Card */}
              <div className='w-full h-auto min-h-[300px] md:min-h-[350px] border border-gray-200 flex flex-col items-center text-center justify-center gap-3 md:gap-4 bg-gray-50 p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg'>
                <CiBellOn className='h-10 w-10 md:h-14 md:w-14 text-cyan-800' />
                <h3 className='text-lg md:text-2xl font-semibold'>Concierge Service</h3>
                <RiPokerDiamondsFill className='text-cyan-800 text-sm md:text-base' />
                <p className='text-sm md:text-lg leading-relaxed px-2'>
                  Our friendly and hospitable staff will do their best to make your accommodation pleasant
                </p>
              </div>

              {/* Bar & Restaurant Card */}
              <div className='w-full h-auto min-h-[300px] md:min-h-[350px] border border-gray-200 flex flex-col items-center text-center justify-center gap-3 md:gap-4 bg-gray-50 p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg md:col-span-2 lg:col-span-1'>
                <GiWineGlass className='h-10 w-10 md:h-14 md:w-14 text-cyan-800' />
                <h3 className='text-lg md:text-2xl font-semibold'>Bar & Restaurant</h3>
                <RiPokerDiamondsFill className='text-cyan-800 text-sm md:text-base' />
                <p className='text-sm md:text-lg leading-relaxed px-2'>
                  Enjoy European cuisine from the famous chefs in our special in-hotel restaurant
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CutXpress History & Carousel Section - Mobile centered, md+ same as lg */}
        <section className='w-full px-4 md:px-6 lg:px-8 py-8 md:py-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-8 md:gap-12 lg:gap-16'>

              {/* Text Content */}
              <div className='w-full text-center md:text-left md:w-1/2 lg:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-6'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold border-b-2 border-cyan-800 pb-2'>
                  CutXpress History
                </h2>
                <p className='text-sm md:text-lg leading-relaxed text-gray-600'>
                  Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence
                </p>
                <p className='text-sm md:text-lg leading-relaxed text-gray-600'>
                  By impossible of in difficulty discovered celebrated ye. Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy add him. As earnestly shameless elsewhere defective estimable fulfilled of. Esteem my advice it an excuse enable
                </p>
                <div className='mt-4'>
                  <Button>Learn More</Button>
                </div>
              </div>

              {/* Carousel Content */}
              <div className='w-full md:w-1/2 lg:w-1/2'>
                <Carousel />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPageComponents;
