import React from 'react'
import ContactHero from '../../Components/userPagesComponents/contactPageComponents/ContactHero'
import Header from '../../Components/common/Header'
import ContactForm from '../../Components/userPagesComponents/contactPageComponents/ContactForm'
import Footer from '../../Components/common/Footer'

const ContactPage = () => {
  return (
    <>
    <Header/>
    <ContactHero/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default ContactPage