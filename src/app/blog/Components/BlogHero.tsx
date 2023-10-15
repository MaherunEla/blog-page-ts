import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

const BlogHero = () => {
  return (
    <div className='bg-levender'>
        <div className='container py-10 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className=' w-full lg:max-w-xl flex flex-col gap-5'>
                <span className='font-inter text-base font-medium leading-5 tracking-[3px] uppercase'>Featured Post</span>
                <div className='mb-[32px]'>
                <h2 className='mb-4'>Step-by-step guide to choosing great font pairs</h2>
                <span className='l1 text-darkgray mb-4'>By <span className='text-purple'>John Doe </span>  l   May 23, 2022 </span>
                <p className=' b1 text-mediumgray'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                </div>
                
                <div>
                <div className='flex flex-row items-center border w-[204px] h-[56px] border-yellow bg-yellow '>
                <Link href="/blog/?page=1" className="pl-[45px] text-sm md:text-lg font-bold text-black ">Read More </Link>
                <IoIosArrowForward className="mt-2px fill-[#232536]"/>

                </div>

                </div>
                


            </div>

           
            <div className='w-full h-[300px] lg:w-[515px] lg:h-[359px] relative'>
                <Image src='/assets/images/Blog/blogbg.png'fill objectFit alt="bgimage"/>


            </div>

           
            
        </div>


    </div>
  )
}

export default BlogHero