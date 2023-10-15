import React from 'react'
import Image from 'next/image'

const AboutBlog = () => {
  return (
    <div className='container py-12 lg:py-32 '>
        <div className='flex flex-col gap-12 lg:gap-32'>
        <div className='flex flex-col lg:flex-row xl:items-center xl:justify-between gap-[137px]'>
            <div className='w-full lg:max-w-lg '>
                <h2 className='mb-4'>Our team of creatives</h2>
                <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <span className='b1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</span>

            </div>
            <div className='relative'>
               <div className='w-full h-[300px] lg:w-[624px] lg:h-[480px] relative'>
                <Image src='/assets/images/About/abouthero.png' fill objectFit alt="about"/>
               </div>
               <div className='w-[103px] h-[116px] bg-yellow rounded-tl-3xl -ml-12 -mt-[400px] absolute hidden xl:block'>

               </div>

            </div>

        </div>

        <div className='flex flex-col lg:flex-row xl:items-center xl:justify-between gap-12 lg:gap-32'>
           
            <div className='relative'>
               <div className='w-full h-[300px] lg:w-[624px] lg:h-[480px] relative'>
                <Image src='/assets/images/About/abouthero2.png' fill objectFit alt="about"/>
               </div>
               <div className='w-[74px] h-[74px] bg-purple rounded-full ml-[107px] -mt-[35px] absolute hidden xl:block'>

               </div>

            </div>
            <div className='w-full lg:max-w-lg '>
                <h2 className='mb-4'>Why we started this Blog</h2>
                <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <span className='b1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</span>

            </div>

        </div>

        </div>
       

    </div>
  )
}

export default AboutBlog