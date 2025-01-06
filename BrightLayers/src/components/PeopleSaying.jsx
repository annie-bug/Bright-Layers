import React from 'react'
import image26 from '../assets/image26.png'
import image25 from '../assets/image25.png'
import image27 from '../assets/image27.png'

function PeopleSaying() {
  return (
    <div className='mt-[10.84rem] flex flex-col'>
        <div className='flex justify-center w-[15.81875rem] h-[1.19069rem] mx-auto'>
            <div className='text-[#313338] text-center font-pSans text-[1.02056rem] font-semibold leading-[1.20425rem] tracking-[0.01019rem]'>What Are People Saying</div>
        </div>
        <div className='mt-[2.08rem]'>
            <div className='flex flex-row justify-between w-auto mx-auto ml-2'>
                <img src={image26} alt="eurekaLogo" className='w-[6.01344rem] h-[3.52513rem]'/>
                <img src={image25} alt="thamesLogo" className='w-[7.4245rem] h-[2.00113rem] mt-5'/>
                <img src={image27} alt="tunvay" className='w-[4.66319rem] h-[3.75838rem]'/>
            </div>
        </div>
    </div>
  )
}

export default PeopleSaying