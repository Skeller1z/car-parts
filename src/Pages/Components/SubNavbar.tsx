import React from 'react'
import Items from './SubNavMenu/Items'

const SubNavbar = () => {
    return (
        <nav className="bg-gray-700 text-white p-4 md:flex md:items-center md:justify-between overflow-x-auto">
           <Items/>
        </nav>
    )
}

export default SubNavbar