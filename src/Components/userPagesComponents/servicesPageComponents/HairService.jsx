import SalonServiceCard from './cardTemplate/SalonServiceCard'
import { servicesData } from '../../../data/userIndex'
import Header from '../../common/Header'
import CommonHero from '../../common/CommonHero'
import Footer from '../../common/Footer'
const HairService = () => {
    const handleBooking = () => {
        console.log('Service booked!')
    }
    const hairServices = servicesData.filter(service => service.category === "hair")
    return (
        <>
            <CommonHero title="Friseur Services" />
            {hairServices.map((service, index) => (
                <SalonServiceCard
                    key={index}
                    title={service.title}
                    barber={service.barber}
                    originalPrice={service.originalPrice}
                    discountedPrice={service.discountedPrice}
                    info={service.info}
                    imageUrl={service.imageUrl}
                    serviceType={service.serviceType}
                    providerName={service.providerName}
                    description={service.description}
                    rating={4.5}
                    distance="2.3km"
                />
            ))}
        </>
    )
}
export default HairService