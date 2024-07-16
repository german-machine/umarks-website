import React from 'react';
import { WHYUS } from './data';

const WhyChooseUs = () => {
    return (
        <div className="w-full bg-[#F3F3F3]">
            <div className="w-[90%] lg:w-[80%] m-auto py-8 flex flex-wrap gap-[2%]">
                {WHYUS.map(item => (
                    <Works key={item.id} item={item} />
                ))}
            </div>
        </div>
    )

    function Works({ item }) {
        return (
            <div className={`lg:w-[32%] max-w-max w-full md:w-[90%] ${item.id === 'why-us' ? 'bg-transparent' : item.id === '02' ? 'bg-[#020181]' : 'bg-white'} mb-[17px] rounded-[10px] p-[20px_20px]`} data-aos="fade-up" data-aos-once="false" data-aos-mirror="false">
                <div>
                    <h1 className={`${item.id === 'why-us' ? 'md:text-[40px] text-[35px] leading-[50px] text-[#F87516]' : item.id === '02' ? 'text-white text-[40px]' : 'md:text-[45px] text-[40px] text-[#020181]'} font-[700] `}>{item.num}</h1>
                </div>
                <div>
                    <h1 className={`text-[23px] p-[3px_0px] ${item.id === '02' ? 'text-white' : 'text-[#5C5C5C]'} font-semibold`}>{item.label}</h1>
                </div>
                <div>
                    <p className={`${item.id ===  'why-us' ? 'text-[#000]' : item.id === '02' ? 'text-white' : 'text-[#787878]'}  font-[400] max-w-[100%]`}>{item.content}</p>
                </div>
            </div>
        )
    }
}

export default WhyChooseUs;