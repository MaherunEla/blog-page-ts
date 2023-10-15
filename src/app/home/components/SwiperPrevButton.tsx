import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useSwiper } from 'swiper/react'
const SwiperPrevButton = () => {
    const swiper = useSwiper();
  return (
    <button className='w-[48px] h-[48px] border rounded-full border-white bg-white' onClick={()=>{swiper.slidePrev()}}>
        <BsArrowLeft className='ml-3 fill-black' size={23}/>

    </button>
  )
}

export default SwiperPrevButton