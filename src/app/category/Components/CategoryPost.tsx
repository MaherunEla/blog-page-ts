"use client";
import React from 'react'
import { useParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link';
import { AllBlogdata } from '@/app/home/Components/AllData';
const CategoryPost = () => {
    const param = useParams()
    const post = AllBlogdata.filter(item=>item.category.slug==param?.slug)
    const category = AllBlogdata.slice(0,4);
  return (
    <div className='container py-32'>
        <div className='flex flex-col xl:flex-row gap-4'>
            <div className='flex flex-col flex-1 gap-8'>
            {
                post.map((item,index)=>(
                    <Link href={`/blog/${item.slug}`} key={index}>
                        <div className='flex flex-col lg:flex-row gap-8' >
                <div className='w-full lg:w-[294px] h-[312px] relative'>
                    <Image src={item.image} fill objectFit="cover" alt="post"/>

                </div>
                <div className='w-full lg:w-[512px] flex flex-col  justify-center'>
                    <span className='p_text text-purple mb-5'>{item.category.name}</span>
                    <h2 className='mb-4'>{item.title}</h2>
                    <p className='text-mediumgray'>{item.content}</p>

                </div>

            </div>

                    </Link>
                    
                ))

            }

            </div>
           
            
            <div className='flex flex-col gap-12'>
                <h2 className='mb-10'>Categories</h2>

                <div className='flex flex-col gap-6'>
                    {
                        category.map((item,index)=>(
                            <Link href={`/category/${item.category.slug}`} key={index}>
                                <div className='flex flex-row items-center  gap-4 py-7 pl-6 pr-20  border-[1.5px] border-mediumgray border-opacity-40 hover:bg-yellow' >
                                <div className='h-[48px] w-[48px] rounded-lg border-lightyellow bg-lightyellow'>
                                <Image className="m-3" src={item.icon} width={23} height={23} alt="icon"/>
                                </div>
                                
                                <h3>{item.category.name}</h3>

                            </div>

                            </Link>
                            
                        ))
                    }

                </div>

                <h2 className='mb-6'>All Tags</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row  gap-4'>
                        <span className='text-black py-4 px-9 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Business</span>
                        <span className='text-black py-4 px-9 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Experience</span>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <span className='text-black py-4 px-12 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Screen</span>
                        <span className='text-black py-4 px-12 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Technology</span>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <span className='text-black px-16 py-4 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Marketing</span>
                        <span className='text-black py-4 px-9 font-sen text-lg font-bold leading-8 border border-mediumgray rounded-full'>Life</span>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default CategoryPost