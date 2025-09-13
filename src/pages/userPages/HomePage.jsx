import React from 'react'
import Hero from '../../Components/userPagesComponents/homePageComponents/Hero'
import Categories from '../../Components/userPagesComponents/homePageComponents/Category'
import TopRated from '../../Components/userPagesComponents/homePageComponents/TopRated'
import Kosmetik from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Kosmetik'
import Massage from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Massage'
import Friseur from '../../Components/userPagesComponents/homePageComponents/CategoriesWithServices/Friseur'
import WebApp from '../../Components/userPagesComponents/homePageComponents/WebApp'
const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <TopRated />
            <Kosmetik />
            <Massage />
            <Friseur />
            <WebApp />
        </>
    )
}

export default HomePage