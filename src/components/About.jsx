import React from 'react'
import check from '../assets/images/image 20.svg'

const About = () => {
  return (
    <div className='w-full bg-white'>
        <div className="w-[90%] md:w-[80%] m-auto py-9">
            <h1 className='w-[50%] md:w-[30%] m-auto uppercase text-[30px] md:text-[40px] font-[700] text-center border-b-[4px] border-[#F87516] '>about us</h1>
            <div className="w-full flex gap-4">
                <div className="w-[50%]">
                    <h1 className='font-[700] text-[96px] text-[#020181] leading-[82px]'>UMARKS <span className='font-[500] text-[80px] text-[#000]'>TECHNOLOGIES</span></h1>
                    <p className='w-full font-[500] text-[24px] leading-[28px] text-[#000]'>Umarks technologies a one stop dstination for your websites,mobile apps,social media management and we provide the following services efficiently and professionally with our team of skilled and exceptionally good programmers, designers and marketers.</p>
                </div>
                <div className="w-[50%]">
                    <img src={check} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About