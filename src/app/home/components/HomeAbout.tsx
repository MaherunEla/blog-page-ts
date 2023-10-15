import React from 'react'

const HomeAbout = () => {
  return (
    <div className='container'>
        <div className='flex flex-row items-end justify-end '>
            <div className='w-full lg:w-[843px] h-[23px] bg-yellow'>

            </div>
            <div className='w-full lg:w-[282px] h-[23px] bg-purple'>

            </div>


        </div>
         <div className=' bg-levender '>
        
        <div className='flex flex-col md:flex-row gap-[61px] py-[48px] lg:py-[96px] px-[40px] lg:px-[80px]'>
            <div className='flex flex-col gap-6 w-full lg:w-[494px]'>
                <span className='text-black font-inter text-base font-semibold leading-5 tracking-[3px] '>ABOUT US</span>
                <div className='flex flex-col gap-4'>
                <h2>We are a community of content writers who share their learnings</h2>
                <p className='text-mediumgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span className='font-sen text-lg font-bold leading-6 text-purple'>Read More &#8250;</span>

                </div>
                

            </div>

            <div className='flex flex-col gap-6 w-full lg:w-[494px]'>
                <span className='text-black font-inter text-base font-semibold leading-5 tracking-[3px] uppercase'>Our mision</span>
                <div className='flex flex-col gap-4'>
                <h3>Creating valuable content for creatives all around the world</h3>
                <p className='text-mediumgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                

                </div>
                

            </div>
            <div>

            </div>

        </div>

    </div>

    </div>
   
  )
}

export default HomeAbout