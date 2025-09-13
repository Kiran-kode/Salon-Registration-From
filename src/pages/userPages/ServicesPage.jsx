import React from 'react'
import CommonHero from '../../Components/common/CommonHero'
import Header from '../../Components/common/Header'
import Footer from '../../Components/common/Footer'
import SalonServiceCard from '../../Components/userPagesComponents/servicesPageComponents/cardTemplate/SalonServiceCard'
import HairService from '../../Components/userPagesComponents/servicesPageComponents/HairService'
import BeautyService from '../../Components/userPagesComponents/servicesPageComponents/beautyService'

const ServicesPage = () => {
  return (
    <>
        <CommonHero title="Friseur Services" imageUrl="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" />
{/* <HairService/> */}
<BeautyService/>
    </>
  )
}

export default ServicesPage