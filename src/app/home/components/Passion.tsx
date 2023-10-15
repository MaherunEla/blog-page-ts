import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
const Passion = () => {
  return (
    <div className='container'>
        <div className='flex flex-col xl:flex-row gap-4'>
          
            <div className='w-full h-[350px] lg:w-[949px] lg:h-[705px] relative'>
                <Image src='/assets/images/Home/group.png' fill objectFit='cover' alt="image"/> 
            </div>
            <div className='xl:z-40  xl:w-[710px] xl:h-[584px] xl:mt-[121px] xl:-ml-[375px] bg-white'>
            <div className='py-10 px-10 lg:py-20 lg:px-20 '>
                <p className='p_text font-semibold mb-[24px]'>Why we started </p>
                <h1 className='mb-4'>It started out as a simple idea and evolved into our passion</h1>
                <p className='mb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <Link href="/" className='px-12 py-4 text-sm md:text-lg font-bold border border-[#FFD050] bg-[#FFD050] font-sen'>Discover our story &#8250;</Link>
               


            </div>
            </div>

          

           
            

        </div>

    </div>
  )
}

export default Passion