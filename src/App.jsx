import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar/nav'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/contact/contactUs'


import Footer from './components/footer/footer'

import Prop from './pages/properties/propertiesPage'
import Proper from './pages/property/propertyPage'
import Landing from './pages/Landing/landing'




function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element ={ <Landing /> } />
        <Route path="/propertiesPage" element ={ <Prop /> } />
        <Route path="/propertyPage" element ={ <Proper /> } />
        <Route path="/contactUs" element ={ <ContactUs /> } />

      </Routes>
      <Footer />
    </>
  )
}

export default App
