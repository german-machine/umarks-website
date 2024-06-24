import React from 'react'
import headerLogo from '../assets/images/hero1.jpg'

const Hero = () => {
    return (
        <div className='w-full' id='home'>
            <div className="w-full lg:w-[90%] m-auto pt-[4.5rem] md:pt-[7rem] lg:pt-[6rem] py-4 relative">
                <div className='flex justify-center h-[60vh] md:h-[80vh] ' style={{ backgroundImage: `url(${headerLogo})`, width: '100%', backgroundRepeat: 'no-repeat', height: '', backgroundPosition: `${window.innerWidth > 768 ? 'center' : 'top'}`, backgroundSize: `${window.innerWidth >= 768 ? 'cover' : 'cover'}`, borderRadius: '10px', objectFit: 'contain', position: 'relative' }}>
                    <div className='bg-gradient-to-r from-[rgba(0,0,0,0.45)] from-[70%] to-transparent w-full h-[60vh] md:h-[80vh] absolute top-0 rounded-[10px]'></div>
                    <h1 className='text-white text-[60px] md:text-[100px] lg:text-[80px] text-center font-semibold absolute top-[70px] md:top-[80px] lg:top-[50px] xl:top-[90px] leading-[80px] md:leading-[120px] xl:leading-[100px] xl:max-w-[80%] '>A limitless <span className='text-[#010180df]'>Experience</span> with Umarks Technologies</h1>
                </div>
                {/* <img src={headerLogo} alt="" className='rounded-x lg:rounded-3xl h-[100vw] object-cover max-h-max md:h-[60vh] lg:h-[82vh] w-full bg-contain bg-center lg:w-full lg:bg-cover bg-no-repeat opacity-90 lg:opacity-90' /> */}
            </div>
        </div>
    )
}

export default Hero