import React from 'react'
import { Link } from 'react-router-dom'
import firstImg from '../assets/images/first-about.jpg'
import secondImg from '../assets/images/second-about.jpg'

const WhoWeAre = () => {
    return (
        <div className="w-full bg-[#010180]">
            <div className="w-[90%] lg:w-[80%] m-auto py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between relative">
                <div className="lg:w-[45%]">
                    <h2 className="text-white mb-[20px] font-bold text-[30px]">WHO WE ARE</h2>
                    <p className="text-white text-justify text-[19px] mb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem. Ut omnis repellat accusantium facere alias! Tempora tempore, quis, natus </p>
                    <p className="text-white text-justify text-[19px] mb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam vitae voluptatum harum eos quo commodi dicta sunt provident beatae eum, perferendis in.</p>
                    <div className="flex justify-evenly gap-[50px]">
                        <Link to='/about' className="duration-500 border border-sold border-white text-[15px] no-underline rounded-[30px] bg-white text-[#131313] p-[5px_22px] hover:bg-slate-400 hover:border-slate-400 hover:text-white">Read More</Link>
                        <Link to='/contact' className="duration-500 border border-sold border-white text-[15px] no-underline rounded-[30px] bg-white text-[#131313] p-[5px_22px] hover:bg-slate-400 hover:border-slate-400 hover:text-white">Contact Us</Link>
                    </div>
                </div>
                <div className="w-[50%] relative hidden lg:block">
                    <div className="relative bottom-[50px] right-[0%] object-contain" style={{backgroundImage: `url(${firstImg})`, width: '350px', height: '200px', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', }}></div>   {/* position: 'absolute', top: '2px', left: '20%' */}
                    <div className="absolute top-[30%] right-[0%] object-contain" style={{backgroundImage: `url(.${secondImg})`, width: '300px', height: '200px', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px',  }}></div>   {/* position: 'absolute', top: '100px', left: '65%' */}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre