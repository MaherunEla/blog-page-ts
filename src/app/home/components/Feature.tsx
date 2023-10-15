import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AllBlogdata } from './AllData'

const Feature = () => {
  const post = AllBlogdata.slice(0,4);
  console.log({post});
  return (
    <div className='container py-12 lg:py-32'>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-8'>
            <div className=' w-full lg:w-[733px]'>
                <h2 className='mb-8'>Featured Post</h2>
                <div className='border border-mediumgray border-opacity-10 flex flex-col gap-8 p-8'>
                    <div className='w-full h-[300px] lg:w-[669px] lg:h-[352px] relative'>
                    <Image src="/assets/images/Home/homeab.png" fill alt="feature"/>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <span className='l1'>By <span className='text-purple'>John Doe</span>   l   May 23, 2022</span>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                    <p className='text-mediumgray'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    

                    </div>
                    <div className='flex flex-row items-center border w-[204px] h-[56px] border-yellow bg-yellow'>
                <Link href="/blog/?page=1" className="pl-[45px] text-sm md:text-lg font-bold text-black ">Read More </Link>
                <IoIosArrowForward className="mt-2px fill-[#232536]"/>

                </div>
                   
                    
                    

                </div>

            </div>

            <div className='w-full   lg:w-[517px]'>
              <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-between mb-8'>
              <h2>All Posts</h2>
                <span className='b1  text-purple '>View All</span>
              </div>
             
              {
                post.map((item,index)=>(
                  <Link href={`/blog/${item.slug}` }key={index}>
                  <div className='flex flex-col py-8 px-8 hover:bg-lightyellow  h-full lg:h-[181px]' >
                    <span className='l1'>By <span className='text-purple'>{item.authors.title}</span>  l  <span>{item.date}</span>  </span>
                    <h4>{item.title}</h4>

                 </div>
                  </Link>
                  

                ))
              }
              

              </div>
             
              

            </div>
            <div>

            </div>

        </div>


    </div>
  )
}

export default Feature