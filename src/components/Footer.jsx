import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logoBlue from '../assets/images/logo-blue.jpg'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className="w-full bg-[#010180] overflow-hidden">
            <div className="w-[90%] md:w-[85%] m-auto py-10">
                <div className="mb-4" data-aos="fade-up" data-aos-once="false" data-aos-mirror="false">
                    <p className="text-[16px] font-[300] text-white text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel
                        <br /> DLorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim</p>
                </div>

                <div className="w-full m-auto flex lg:flex-row flex-wrap lg:flex-nowrap gap-[10px] space-y-4 mb-8" data-aos="fade-up" data-aos-once="false" data-aos-mirror="false">
                    <div className="w-full md:w-[50%] border-r-[1px] border-r-solid border-r-white ">
                        <div className="w-[50%] mb-[12px ">
                            <img src={logoBlue} alt="" />
                        </div>
                        <p className="text-[16px] text-justify font-[200] text-white max-w-[90%]">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante vel, Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis, suscipit dignissim rutrum at non porttitor ante
                        vel</p>
                    </div>

                    <div data-aos="fade-up" data-aos-once="false" data-aos-mirror="false" className="w-full md:w-[35%] md:border-r border-r-solid border-r-white flex flex-col justify-center gap-[10px] md:pl-10">
                        <p className="text-[16px] text-white font-semibold">Quick Links</p>
                        <HashLink smooth to='/#home' className="text-white no-underline text-[16px] font-[200]">Home</HashLink>
                        <HashLink smooth to='/#services' className="text-white no-underline text-[16px] font-[200]">Services</HashLink>
                        <Link className="text-white no-underline text-[16px] font-[200]">About Us</Link>
                        <Link className="text-white no-underline text-[16px] font-[200]">Contact Us</Link>
                    </div>

                    <div data-aos="fade-up" data-aos-once="false" data-aos-mirror="false" className="w-full md:w-[45%] md:mt-5 md:border-r border-r-solid border-r-white flex flex-col justify-center gap-[10px] p-[0px_5px]">
                        <p className="text-[16px] text-white font-semibold">Services</p>
                        <Link className="text-white no-underline text-[16px] font-[200]">Web Development</Link>
                        <Link className="text-white no-underline text-[16px] font-[200]">Mobile App Development</Link>
                        <Link className="text-white no-underline text-[16px] font-[200]">Software & Tailored System Development</Link>
                        <Link className="text-white no-underline text-[16px] font-[200]">Business Branding & Product Design</Link>
                    </div>

                    <div data-aos="fade-up" data-aos-once="false" data-aos-mirror="false" className="w-full md:w-[45%] flex flex-col justify-center gap-[10px]">
                        <p className="text-[16px] text-white font-semibold">Contact</p>
                        <div className="flex gap-2 items-center">
                            <FaPhone className="text-[16px] text-white" />
                            <p className="text-[16px] text-white">+234 (0)70 731 6265</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FaEnvelope className="text-[16px] text-white" />
                            <p className="text-[16px] text-white">umarkstechnologies@yahoo.com</p>
                        </div>

                        <div className="flex gap-4 items-center py-4">
                            <Link to='https://web.facebook.com/umarkstech' className="text-white no-underline text-[16px] font-[200]">
                                <FaFacebook className="text-[20px] text-white"/>
                            </Link>
                            <Link to='https://www.linkedin.com/company/102958738/admin/dashboard/">' className="text-white no-underline text-[16px] font-[200]">
                                <FaLinkedin className="text-[20px] text-white" />
                            </Link>
                            <Link to='https://www.instagram.com/umarkstech/' className="text-white no-underline text-[16px] font-[200]">
                                <FaInstagram className="text-[20px] text-white"/>
                            </Link>
                            <Link to='https://x.com/umarkstech' className="text-white no-underline text-[16px] font-[200]">
                                <FaXTwitter className="text-[20px] text-white"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-once="false" data-aos-mirror="false" className='w-full text-center'>
                    <p className="text-[16px] text-white">© 2024 Umarks Technologies. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer