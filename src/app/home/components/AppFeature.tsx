import React from 'react'
import Image from 'next/image'

const AppFeature = () => {
  return (
    <div className='container py-12 lg:py-[96px]'>
        <div className='flex flex-col md:flex-row  gap-[45px]'>
            <div className='flex flex-col '>
                <span className='text-mediumgray'>We are</span>
                <h4 className='text-mediumgray'>Featured in</h4>


            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-[75px]'>
                <div className='w-[160px] h-[32px]  relative'>
                <Image src="/assets/images/Home/Logo 1.svg" fill alt="logo"/>

                </div>

                <div className='w-[136px] h-[32px] relative'>
                <Image src="/assets/images/Home/Logo 2.svg" fill alt="logo"/>

                </div>
               
                <div className='w-[135px] h-[32px] relative'>
                <Image src="/assets/images/Home/Logo 3.svg" fill alt="logo"/>

                </div>
               
                <div className='w-[153px] h-[32px] relative'>
                <Image src="/assets/images/Home/Logo 4.svg" fill alt="logo"/>

                </div>
               
                <div className='w-[136px] h-[32px] relative'>
                <Image src="/assets/images/Home/Logo 5.svg" fill alt="logo"/>

                </div>
               
               

            </div>
        </div>

    </div>
  )
}

export default AppFeature