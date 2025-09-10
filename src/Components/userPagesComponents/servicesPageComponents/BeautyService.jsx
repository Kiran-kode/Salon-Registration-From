import React from 'react'
import { servicesData } from '../../../data/userIndex'
import SalonServiceCard from './cardTemplate/SalonServiceCard'
import Header from '../../common/Header'
import CommonHero from '../../common/CommonHero'
import Footer from '../../common/Footer'


const BeautyService = () => {
    const beautyServices = servicesData.filter((service => service.category === "beauty"))
  return (
   <>

    {/* {beautyServices.forEach(service => <SalonServiceCard key={service.id} {...service}/>)} */}
<Header/>
<CommonHero title="Beauty Services" />
{beautyServices.map((service, index) => (
    <SalonServiceCard
    key={index}
    title={service.title}
    barber={service.barber}
    originalPrice={service.originalPrice}
    discountedPrice={service.discountedPrice}
    info={service.info}
    id={service.id}
    imageUrl={service.imageUrl}
    serviceType={service.serviceType}
    providerName={service.providerName}
    description={service.description}
    rating={service.rating}
    distance={service.distance}
    />
))}
<Footer/>
   </>
  )
}

export default BeautyService