"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import { AllBlogdata } from "@/app/home/Components/AllData";

const CategoryHero = () => {
    const param=useParams()
    const category = AllBlogdata.find(e=>e.category.slug==param?.slug)
  return (
    <div className='bg-levender'>
        <div className='container flex flex-col items-center justify-center py-20'>
            <span className='display mb-4'>{category.category.name}</span>
            <p className='font-normal mb-8'>{category.content}</p>
            <span className='p_text uppercase'>Blog &#8250; Business</span>

        </div>

    </div>
  )
}

export default CategoryHero