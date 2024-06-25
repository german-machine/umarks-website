import React, { useState } from 'react'
import logo from '../assets/images/logo-blue.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import { CgClose, CgMenuRightAlt } from 'react-icons/cg'

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    function handleClick() {
        setIsToggled(!isToggled);
    }

  return (
    <div className="w-full bg-[#010180] fixed z-[1000] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] ">
        <div className="w-[90%] lg:w-[80%] m-auto flex justify-between items-center py-3 px-1">
              <div className='w-[50%] lg:w-[20%]'>
                  <img src={logo} alt="" className='cursor-pointer'/>
              </div>
              {isToggled ? <CgClose onClick={handleClick} className="text-white lg:hidden text-[20px] md:text-[40px] duration-1000 transition-all cursor-pointer" />
                : <CgMenuRightAlt onClick={handleClick} className='text-white lg:hidden text-[20px] md:text-[40px] duration-1000 transition-all cursor-pointer' />
              }
                <ul className={`${isToggled ? 'flex' : 'translate-x-[100%] lg:translate-x-0 opacity-0 lg:opacity-100'} lg:block bg-[#010180] lg:max-w-max fixed lg:relative top-[14vh] lg:top-0 left-[15px] lg:left-0 right-[15px] lg:right-0 bottom-[15px] lg:bottom-0 z-10 rounded-lg ${isToggled ? 'animate-navSlideIn' : 'animate-navSlideOut'}`}>
                    <li className='flex flex-col lg:flex-row gap-5 lg:gap-8 p-4 lg:p-0 items-center w-full'>
                        <Link smooth to='/#home' className='text-[#c4c0c0] hover:text-white duration-1000'>Home</Link>
                        <Link smooth to='/#services' className='text-[#c4c0c0] hover:text-white duration-1000'>Services</Link>
                        <Link smooth to='/' className='text-[#c4c0c0] hover:text-white duration-1000'>About Us</Link>
                        <Link smooth to='/' className='text-[#c4c0c0] border-[2px] rounded-lg lg:rounded-full px-4 py-1 hover:text-[#010180] hover:bg-white duration-1000 inline-block w-[80%] md:w-[60%] lg:max-w-fit text-center'>Contact Us</Link>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Header