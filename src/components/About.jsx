import React, { useEffect } from 'react'
import { EXPERTISE } from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    })
    return (
        <div className='w-full bg-white'>
            <div className="w-[90%] lg:w-[80%] m-auto py-9">
                <h1 className="text-[30px] md:text-[45px] font-bold text-[#020181] lg:text-center" data-aos="fade-up" data-aos-once="false" data-aos-mirror="false" >Our Expertise and Experience</h1>
                <div className="w-full lg:w-full flex space-x-4 lg:gap-[1px] lg:flex-nowrap relative max-w-ma overflow-x-scroll py-6" >
                    {EXPERTISE.map(item => (
                        <ExpertsExperience key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )

    function ExpertsExperience({ item }) {
        return (
            <div className="h-[300px] lg:h-[340px] lg:w-[30%] lg:mt-25px rounded-[5px] relative flex-shrink-0 lg:flex-shrink w-[80%] md:w-[40%] m-auto bg-cover bg-center" >
                <div style={{ backgroundImage: `url(${item.img})`, objectFit: 'cover', borderRadius: '9px', width: '100%', height: '', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className='w-full h-[300px] lg:h-[340px] rounded-[9px] bg-gradient-to-b from-[rgb(11_11_11)] to-[rgba(16_16_16)] opacity-[0.459]'></div>
                </div>

                <div className="absolute top-[20%] left-[20px] right-[20px] flex flex-col justify-center max-w-[90%] text-center" >
                    <div className='pb-[10px]'>
                        <h4 className="text-white text-[24px] leading-[25px]">{item.label}</h4>
                    </div>

                    <div>
                        <p className="text-white text-[16px] leading-[20px] font-normal">{item.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About