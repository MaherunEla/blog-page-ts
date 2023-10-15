"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AllBlogdata } from "./AllData";
import Image from "next/image";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";

const Testimonial = () => {
  const author = AllBlogdata.slice(0, 4);
  return (
    <div className="container bg-lightyellow py-12 px-8 lg:py-24 lg:px-28 gap-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="w-full lg:max-w-xs ">
          <span className="text-black uppercase font-inter text-base font-semibold tracking-[3px] leading-5 mb-3">
            TESTIMONIALs
          </span>
          <h2 className="mb-4">What people say about our blog</h2>
          <span className="b1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </span>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPreView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mt-8 lg:mt-0 w-full relative"
        >
          <div className="flex items-center justify-center absolute bottom-0 right-0 z-10 gap-6">
            <SwiperPrevButton />
            <SwiperNextButton />
          </div>
          {author.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <h4 className="mb-5 lg:mb-[121px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>

                <div className="flex flex-col lg:flex-row gap-4">
                  <Image
                    src={item.authors.image}
                    width={48}
                    height={48}
                    alt="author"
                  />
                  <div className="">
                    <h4>{item.authors.title}</h4>
                    <span className="b1 text-mediumgray">
                      {item.authors.address}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
