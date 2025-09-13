import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
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
// import Dashboard from './pages/adminPages/Dashboard'
import AdminLayout from './Components/adminPagesCompoents/common/adminLayout'
import Users from './pages/adminPages/Users'
import Dashboard from './pages/adminPages/Dashboard'
import SalonsTable from './Components/adminPagesCompoents/services/UsersTable'
import Salons from './pages/adminPages/Salons'
import Staff from './pages/adminPages/Staff'
import Services from './pages/adminPages/Services'
import Bookings from './pages/adminPages/Bookings'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'

const UserLayoutWrapper = () => (
  <div className='min-h-screen flex flex-col'>
    <Header />
    <main className='flex-1'>
      <Outlet />
    </main>
    <Footer />
  </div>
)

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<UserLayoutWrapper />}>
          <Route path='/about' element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/hair" element={<HairService />} />
          <Route path="/services/beauty" element={<BeautyService />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterFormNew />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/salons" element={<Salons />} />
        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/services" element={<Services />} />
        <Route path="/admin/bookings" element={<Bookings />} />
      </Routes>
  )
}

export default App