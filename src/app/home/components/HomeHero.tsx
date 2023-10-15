import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const HomeHero = () => {
  return (
    <div className={`bg-[url('/assets/images/Home/homebg.png')] bg-style w-screen h-full lg:h-[calc(100vh -72px)]`}>
        <div className="w-full h-full" style={{background: "radial-gradient(80.99% 71.93% at 74.58% 0.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"}}>
            <div className='container flex flex-col py-36 gap-6 '>
                <span className='p_text font-medium text-white'>Posted on <span className='font-black'>startup</span></span>
                <h1 className='display  lg:w-[803px] text-white'>Step-by-step guide to choosing great font pairs</h1>
               
                
                <div className='text-white flex flex-col  gap-4'>
                <span className='b1 text-white'>By <span className='text-yellow'>James West</span>  |  May 23, 2022 </span>
                <div>
                <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
                <p className='text-white'>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
               

                

                </div>
                <div className='mt-6 flex flex-row items-center border w-[204px] h-[56px] border-yellow bg-yellow mb-[120px]'>
                <Link href="/blog/?page=1" className="pl-[45px] text-sm md:text-lg font-bold text-black ">Read More </Link>
                <IoIosArrowForward className="mt-2px fill-[#232536]"/>

                </div>
                
               



            </div>

        </div>

    </div>
  )
}

export default HomeHero