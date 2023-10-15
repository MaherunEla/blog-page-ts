import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useSwiper } from 'swiper/react'
const SwiperNextButton = () => {
    const swiper = useSwiper();
  return (
   <button className='w-[62px] h-[62px] border rounded-full border-black bg-black' onClick={()=>{
    swiper.slideNext();

   }}>
    <BsArrowRight className='ml-3 fill-white' size={32}/>

   </button>
  )
}

export default SwiperNextButton