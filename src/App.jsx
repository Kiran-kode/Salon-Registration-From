import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/userPages/HomePage'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/userPages/Login'
import AboutPage from './pages/userPages/AboutPage'
import ServicesPage from './pages/userPages/ServicesPage'
import ContactPage from './pages/userPages/ContactPage'
import HairService from './Components/userPagesComponents/servicesPageComponents/HairService'
import BeautyService from './Components/userPagesComponents/servicesPageComponents/beautyService'
// import MultiStepForm from './pages/userPages/RegisterForm'
import RegisterFormNew from './pages/userPages/RegisterFormNew'
import Dashboard from './pages/adminPages/Dashboard'
const App = () => {
  return (
  <>
  
 
    
      <Routes>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/hair" element={<HairService />} />
        <Route path="/services/beauty" element={<BeautyService />} />
        <Route path="/signup" element={<RegisterFormNew  />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
     </>
  )
}

export default App