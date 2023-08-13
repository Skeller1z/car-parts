import React from 'react'
import Navbar from './Components/Navbar'
import SubNavbar from './Components/SubNavbar'
import LandingPage from './MainPage/LandingPage'
import Products from './MainPage/Product'

type Props = {}

const Mainpage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <SubNavbar/>
        <LandingPage/>
        <Products/>
    </div>
  )
}

export default Mainpage