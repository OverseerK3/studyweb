import React from 'react'
import Navbar from './Components/Navbar'
import FirstSec from './Components/FirstSec'
import SecondSec from './Components/SecondSec'
import Footer from './Components/Footer'
import Thirdsec from './Components/Thirdsec'
import Hero from './Components/SecongPage/Hero'

function Layout() {
  return (
    <>
        <Navbar/>
        <FirstSec/>
        <SecondSec/>
        <Thirdsec/>
        <Footer/>
    </>
  )
}

export default Layout