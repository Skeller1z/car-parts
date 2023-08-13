import React from 'react'

type Props = {}

const SubNavbar = (props: Props) => {
    return (
        <nav className="bg-gray-700 text-white p-4 md:flex md:items-center md:justify-between overflow-x-auto">
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

                <div className="grid grid-cols-8 grid-rows-1 gap-24 content-center">
                    <div >1</div>
                    <div >2</div>
                    <div >3</div>
                    <div >4</div>
                    <div >5</div>
                    <div >6</div>
                    <div >7</div>
                    <div >8</div>
                </div>
            </div>
        </nav>
    )
}

export default SubNavbar