import React from 'react'
import Header from '../../Components/common/Header'
import Hero from '../../Components/userPagesComponents/homePageComponents/Hero'
import Categories from '../../Components/userPagesComponents/homePageComponents/Category'
import TopRated from '../../Components/userPagesComponents/homePageComponents/TopRated'
import Kosmetik from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Kosmetik'
import Massage from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Massage'
import Friseur from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Friseur'
import WebApp from '../../Components/userPagesComponents/homePageComponents/WebApp'
import Footer from'../../Components/common/Footer'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
   
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <TopRated />
            <Kosmetik />
            <Massage />
            <Friseur />
            <WebApp />
            <Footer/>
        </>
    )
}

export default HomePage