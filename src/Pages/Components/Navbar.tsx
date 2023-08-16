import React, { useState } from 'react'
import Man from '../../Assets/man.jpg'
import Logo from './Navmenu/Logo';
import SearchInput from './Navmenu/SearchInput';
import Cart from './Navmenu/Cart';
import Notifications from './Navmenu/Notifications';
import Help from './Navmenu/Help';
import LanguageSelector from './Navmenu/LanguageSelector';
import Profile from './Navmenu/Profile';
import { Outlet } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartAmount, setCartAmount] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };
    
  return (
    <>
     <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-2 md:flex md:items-center md:justify-between">
      <div className="flex items-center space-x-4">
        <Logo />
      </div>

      <div className="flex items-center space-x-4 mx-8 flex-grow">
        <SearchInput />
        <Cart />
      </div>
      <div className="flex items-center space-x-6 ">   
        <Help />
        <LanguageSelector />
        <Notifications />
        <Profile />
      </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar