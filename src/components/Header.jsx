import React from 'react'
import logo from '../assets/images/logo-blue.jpg'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className="w-full bg-[#010180]">
        <div className="w-[90%] md:w-[80%] m-auto flex justify-between items-center">
              <div className='w-[20%]'>
                  <img src={logo} alt="" className='cursor-pointer'/>
              </div>
              <div>
                  <ul className=''>
                      <li className='flex gap-8 items-center'>
                          <Link smooth to='/' className='text-white'>Home</Link>
                          <Link smooth to='/' className='text-white'>Services</Link>
                          <Link smooth to='/' className='text-white'>About Us</Link>
                          <Link smooth to='/' className='text-white border-[2px] rounded-full px-4 py-1 hover:text-[#010180] hover:bg-white duration-1000'>Contact Us</Link>
                      </li>
                  </ul>
              </div>
        </div>
    </div>
  )
}

export default Header