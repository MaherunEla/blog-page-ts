import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navdata } from './data'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='container'>
        <nav className=' flex flex-col   md:flex-row items-center justify-between py-12'> 
            <div className='mb-2 w-[140px] h-[28px] relative'>
                <Image src='/assets/images/Logo.svg' fill alt="logo"/>

            </div>
            <div className='flex flex-col md:flex-row items-center  gap-6 text-white'>
                {
                    navdata.map((item,index)=>(
                        <Link href={item.href} key={index} className='b1 font-inter text-white'>{item.page}</Link>
                    ))
                }
                <Link href="/privacy" className='b1 font-inter text-white'>Privacy Policy</Link>
              {/* mobile icon */}
            
            </div>
            
            

            
           
            

        </nav>

        <div className='py-20 px-[64px] bg-[#2E3040] flex flex-col  md:flex-row  items-center gap-[64px] '>
            
            <h2 className=' text-white text-start w-full lg:w-[562px]'>Subscribe to our news letter to get latest updates and news</h2>
            <form action="/" className='flex  flex-col lg:flex-row gap-6 '>
                <div>
                <input type="email" placeholder='Enter Your Email' className='w-full lg:w-[323px]  h-14 pl-6 py-3 border border-darkgray placeholder-mediumgray bg-[#2E3040]' value=""/>

                </div>
               
                <Link href="/" className='button bg-yellow w-[179px] h-14'>Subscribe</Link>

            </form>

           
           
           
        </div>
        <div className=' py-12 flex flex-col gap-2 md:flex-row justify-between'>

        <div className='flex flex-col b1 text-white/60'>
            <span>Finstreet 118 2561 Fintown</span>
            <span>Hello@finsweet.com  020 7993 2905</span>


        </div>

        <div className='flex flex-row items-center gap-6 '>
            <BsFacebook className='fill-mediumgray'/>
            <BiLogoTwitter className='fill-mediumgray' />
            <AiOutlineInstagram className='fill-mediumgray'/>
            <AiFillLinkedin className='fill-mediumgray'/>



        </div>

        </div>
        

        </div>

    </div>
  )
}

export default Footer