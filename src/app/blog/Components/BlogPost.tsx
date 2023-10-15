import React from 'react'
import { useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import { AllBlogdata } from '@/app/home/Components/AllData';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
    const params = useSearchParams();
    const router = useRouter()
    console.log(params.get('page'));
    const page= params.get('page');
    const pageSize=5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const selectedItem = AllBlogdata.slice(startIndex,endIndex);
    const length = AllBlogdata.length;
    const [isNextDisabled,setIsNextDisabled] = useState(false);
    const [isPrevDisabled,setIsPrevDisabled] = useState(false);

    const PrevhandleClick=()=>{
        if(startIndex ===0)
        {
            setIsPrevDisabled(true);
        }
        else{
            router.push(`/blog?page=${Number(page) -1}`)
        }
    };

    const NexthandleClick=()=>{
        if(endIndex>length)
        {
            setIsNextDisabled(true);
        }
        else{
            router.push(`/blog?page=${Number(page)+1}`);
        }
    }




  return (
    <div className='container py-[64px] '>
        <h1 className='mb-8'>All posts</h1>
        <hr className='w-full bg-mediumgray mb-[64px]'></hr>
        <div className=' grid grid-cols-1 gap-16'>
            {
                selectedItem.map((item,index)=>(
                    <Link href={`/blog/${item.slug}`} key={index}>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                        <div className='w-full h-[280px] lg:w-[490px] lg:h-[318px] relative'>
                            <Image src={item.image} fill alt="postimage" />

                        </div>
                        <div className='w-full' >
                            <span className='font-inter text-base font-medium leading-5 tracking-[3px] text-purple uppercase mb-5'>
                           {item.category.name}
                            </span>
                            <h2 className='mb-4'>{item.title}</h2>
                            <p className='text-mediumgray'>{item.subTitle}</p>


                        </div>

                    </div>

                    </Link>
                    
                ))
            }

        </div>
        <div className='mt-[69px] flex flex-col items-start md:items-center'>
            <div className='flex flex-row space-x-2 md:space-x-5'>
            <button disabled={isPrevDisabled} onClick={PrevhandleClick}><h4 className='text-mediumgray'>&#8249; <span>Prev</span></h4></button>
            <button disabled={isNextDisabled} onClick={NexthandleClick}><h3>Next<span> &#8250;</span></h3></button>

            </div>
           

        </div>


    </div>
  )
}

export default BlogPost