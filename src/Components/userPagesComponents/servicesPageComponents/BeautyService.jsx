import React from 'react'
import { servicesData } from '../../../data/userIndex'
import SalonServiceCard from './cardTemplate/SalonServiceCard'
import CommonHero from '../../common/CommonHero'
const BeautyService = () => {
    const beautyServices = servicesData.filter((service => service.category === "beauty"))
  return (
   <>
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
   </>
  )
}

export default BeautyService