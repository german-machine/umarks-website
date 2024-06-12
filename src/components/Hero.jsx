import React from 'react'
import headerLogo from '../assets/images/hero1.jpg'

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-[90%] m-auto py-4 relative">
                <img src={headerLogo} alt="" className='rounded-3xl h-[85vh] w-full bg-cover bg-no-repeat opacity-60' />
                <h1 className='text-[90px] font-[700] w-[75%] absolute top-[80px] leading-[110px] px-9'>A limitless <span className='text-[#010180]'>Experience</span> with Umarks Technologies</h1>
            </div>
        </div>
    )
}

export default Hero