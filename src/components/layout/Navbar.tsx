"use client";
import React from 'react'
import { navdata } from './data'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {SlMenu} from 'react-icons/sl'
import {IoMdClose} from 'react-icons/io'
import clsx from 'clsx'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handle=()=>{
        setNav(!nav);
    };
  return (
    <div className='bg-black '>
        <nav className='container flex flex-row items-center justify-between py-4'> 
            <div className='w-[140px] h-[28px] relative'>
                <Image src='/assets/images/Logo.svg' fill alt="logo"/>

            </div>
            <div className='hidden md:flex flex-row items-center  gap-6 text-white'>
                {
                    navdata.map((item,index)=>(
                        <Link href={item.href} key={index} className='b1 font-inter text-white'>{item.page}</Link>
                    ))
                }
                <Link href="/" className='button font-bold leading-6 text-lg  text-black bg-white font-sen '>Subscribe</Link>
              {/* mobile icon */}
            
            </div>
            <button onClick={handle} className='md:hidden flex items-right'>
               {nav? (<IoMdClose className='text-white w-10 h-10'/>) : (<SlMenu className='text-white w-10 h-10'/>)}

            </button>
            

            
           
            

        </nav>
        {/* mobile navbar */}
        <div className={clsx("md:hidden block h-[250px] bg-black", nav?"block":"hidden")}>
                <div className='  flex flex-col items-center self-end'>
                    {
                        navdata.map((item,index)=>(
                            <Link href={item.href} className='b1 py-2 text-white' onClick={handle} key={index}>{item.page}</Link>
                        ))
                    }
                     <Link href="/" className='button text-black bg-white font-sen'>Subscribe</Link>

                </div>

            </div>

    </div>
  )
}

export default Navbar