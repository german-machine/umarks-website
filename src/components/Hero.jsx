import React, { useEffect } from 'react'
import headerLogo from '../assets/images/hero1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, [])
    return (
        <div className='w-full' id='home' data-aos="fade-down" data-aos-once="false" data-aos-mirror="true">
            <div className="w-full lg:w-[90%] m-auto pt-[4.5rem] md:pt-[7rem] lg:pt-[6rem] py-4 relative">
                <div className='flex justify-center h-[60vh] md:h-[80vh] ' style={{ backgroundImage: `url(${headerLogo})`, width: '100%', backgroundRepeat: 'no-repeat', height: '', backgroundPosition: `${window.innerWidth > 768 ? 'center' : 'top'}`, backgroundSize: `${window.innerWidth >= 768 ? 'cover' : 'cover'}`, borderRadius: '10px', objectFit: 'contain', position: 'relative' }}>
                    <div className='bg-gradient-to-r from-[rgba(0,0,0,0.45)] from-[70%] to-transparent w-full h-[60vh] md:h-[80vh] absolute top-0 rounded-[10px]'></div>
                    <h1 className='text-white text-[60px] md:text-[100px] lg:text-[80px] text-center font-semibold absolute top-[70px] md:top-[80px] lg:top-[50px] xl:top-[90px] leading-[80px] md:leading-[120px] xl:leading-[100px] xl:max-w-[80%] ' data-aos="fade-right" data-aos-once="false" data-aos-mirror="true">A limitless <span className='text-[#010180df]'>Experience</span> with Umarks Technologies</h1>
                </div>               
            </div>
        </div>
    )
}

export default Hero