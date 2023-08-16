import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Steering from '../../../Assets/steering.png'
import Oil from '../../../Assets/Oil.png'
import Sticker from '../../../Assets/9709681.png'
import Battery from '../../../Assets/battery.png'
import Filter from '../../../Assets/filter.webp'

const Items = () => {
    return (
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <div className="grid grid-cols-6 grid-rows-1 gap-24 content-center">
                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-green-600 to-green-700 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                        <FontAwesomeIcon icon={faTicket} />
                    </div>
                    <span className='flex justify-center text-sm'>Coupon</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                        {/* <FontAwesomeIcon icon={faTicket} /> */}
                        <img src={Steering} alt="Steering" className='w-8 h-8' />
                    </div>
                    <span className='flex justify-center text-sm'>Steering</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                        <img src={Oil} alt="Steering" className='w-8 h-8' />
                    </div>
                    <span className='flex justify-center text-sm'>Engine oil</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                    <img src={Sticker} alt="Steering" className='w-8 h-8' />
                    </div>
                    <span className='flex justify-center text-sm'>Sticker</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                    <img src={Battery} alt="Steering" className='w-8 h-8' />
                    </div>
                    <span className='flex justify-center text-sm'>Battery</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                    <img src={Filter} alt="Steering" className='w-8 h-8' />
                    </div>
                    <span className='flex justify-center text-sm'>Air filter</span>
                </div>

                {/* <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                        <FontAwesomeIcon icon={faTicket} />
                    </div>
                    <span className='flex justify-center text-sm'>LED Light</span>
                </div>

                <div className='w-16 md:items-center'>
                    <div className='bg-gradient-to-r from-gray-400 to-gray-300 rounded-full w-10 h-10 border flex justify-center items-center mx-auto'>
                        <FontAwesomeIcon icon={faTicket} />
                    </div>
                    <span className='flex justify-center text-sm'>Wiper</span>
                </div> */}
            </div>
            </div>
    )
}

export default Items