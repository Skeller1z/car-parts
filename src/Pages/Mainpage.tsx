import React from 'react'
import Navbar from './Components/Navbar'
import SubNavbar from './Components/SubNavbar'
import LandingPage from './MainPage/LandingPage'
import Products from './MainPage/Product'
import FilterProduct from './MainPage/FilterProduct'
import ProductDetail from './MainPage/ProductDetail'

type Props = {}

const Mainpage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <SubNavbar/>
        <LandingPage/>
        {/* <ProductDetail/> */}
        <Products/>
        
    </div>
  )
}

export default Mainpage