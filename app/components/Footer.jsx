import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex h-fit space-x-2 flex-row px-40 bg-black text-white justify-between py-8'>

        {/* About Us */}
        <div className='w-full'>
            <h1 className='w-fit flex flex-col text-2xl font-[500]'>About Us
                <div className='w-1/2 h-[2px] bg-yellow-400 mt-4'></div>
            </h1>

            <div className='mt-8'>
                <h1 className='text-[#777676]'>
                E.V.A floats are manufactured from Ethylene Vinyl Acetate (E.V.A) which is superior compared to other material and have an excellent elasticity.
                </h1>
            </div>
        </div>

        {/* Navigation */}
        <div className='w-full'>
        <h1 className='w-fit flex flex-col text-2xl font-[500]'>Navigation
                <div className='w-1/2 h-[2px] bg-yellow-400 mt-4'></div>

            </h1>
            <div className='mt-8 flex space-y-2 text-sm font-[500] flex-col justify-items-start text-start'>
                <button className='flex items-center justify-center gap-2 w-fit'><MdKeyboardDoubleArrowRight/>HOME</button>
                <button className='flex items-center justify-center gap-2 w-fit'><MdKeyboardDoubleArrowRight/>ABOUT</button>
                <button className='flex items-center justify-center gap-2 w-fit'><MdKeyboardDoubleArrowRight/>PRODUCTS</button>
                <button className='flex items-center justify-center gap-2 w-fit'><MdKeyboardDoubleArrowRight/>WHY US?</button>

            </div>

        </div>

        {/* Gallery */}
        <div className='w-full'>
        <h1 className='w-fit flex flex-col text-2xl font-[500]'>Gallery
                <div className='w-1/2 h-[2px] bg-yellow-400 mt-4'></div>
            </h1>
        </div>
        
    </div>
  )
}

export default Footer