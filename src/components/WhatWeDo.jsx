import React from 'react'
import whatwedo from '../assets/images/what-we-do.jpg'
import { FaCode, FaLaptopCode, FaMobile, FaPenFancy } from 'react-icons/fa'

const WhatWeDo = () => {
    return (
        <div className="w-full bg-white relative" id='services'>
            <div className="w-[95%] lg:w-[90%] m-auto flex flex-wrap lg:flex-nowrap gap-2 py-12">
            <h1 className='w-full block lg:hidden text-[#020181] text-[30px] font-bold text-center'>What We Do</h1>
                <div className="flex flex-col lg:w-[30%] flex-shrink lg:flex-shrink-0 gap-3">
                    <div className="lg:w-[100%] bg-[#D9D9D9] rounded-[10px] p-[30px_20px]">
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-2 mb-2">
                            <div className="">
                                <FaCode className="text-[30px] md:text-[40px] lg:text-[30px] text-[#F87516]"/>
                            </div>
                            <h2 className="font-bold text-[#020181] text-[18px] md:text-[26px] lg:text-[18px]">Web Development</h2>
                        </div>
                        <div>
                            <p className="text-[16px] md:text-[22px] lg:text-[16px] text-[#F87516] text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel</p>
                        </div>
                    </div>

                    <div className="lg:w-[100%] bg-[#D9D9D9] rounded-[10px] p-[30px_20px]">
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-2 mb-2">
                            <div className="">
                                <FaLaptopCode className="text-[30px] md:text-[40px] lg:text-[30px] text-[#F87516]"/>
                            </div>
                            <h2 className="font-bold text-[#020181] text-[18px] md:text-[26px] lg:text-[18px]">Software & Tailored System Development</h2>
                        </div>
                        <div>
                            <p className="text-[16px] md:text-[22px] lg:text-[16px] text-[#F87516] text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel</p>
                        </div>
                    </div>
                </div>

                <div className="w-full hidden lg:flex lg:flex-col lg:jusitfy-center lg:tems-center">
                    <h1 className='text-[#020181] text-[30px] font-bold text-center'>What We Do</h1>
                    <div className="w-full flex-1 flex-grow bg-cover bg-center items-center justify-center" style={{ backgroundImage: `url(${whatwedo})`, backgroundPosition: 'center', backgroundSize: 'contain', width: '', backgroundRepeat: 'no-repeat', objectFit: 'cover', height: '85%' }}></div>
                </div>

                <div className="flex flex-col lg:w-[30%] flex-shrink lg:flex-shrink-0 gap-3">
                    <div className="lg:w-[100%] bg-[#D9D9D9] rounded-[10px] p-[30px_20px]">
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-2 mb-2">
                            <div className="">
                                <FaMobile className="text-[30px] md:text-[40px] lg:text-[30px] text-[#F87516]" />
                            </div>
                            <h2 className="font-bold text-[#020181] text-[18px] md:text-[26px] lg:text-[18px] ">Mobile App Development</h2>
                        </div>
                        <div>
                            <p className="text-[16px] md:text-[22px] lg:text-[16px] text-[#F87516] text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel</p>
                        </div>
                    </div>

                    <div className="lg:w-[100%] bg-[#D9D9D9] rounded-[10px] p-[30px_20px]">
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-2 mb-2">
                            <div className="">
                                <FaPenFancy className="text-[30px] md:text-[40px] lg:text-[30px] text-[#F87516]"/>
                            </div>
                            <h2 className="font-bold text-[#020181] text-[18px] md:text-[26px] lg:text-[18px]">Business Branding & Product Design</h2>
                        </div>
                        <div>
                            <p className="text-[16px] md:text-[22px] lg:text-[16px] text-[#F87516] text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo