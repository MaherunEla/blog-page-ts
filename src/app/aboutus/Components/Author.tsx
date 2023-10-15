import React from "react";
import Image from "next/image";
import { AllBlogdata } from "@/app/home/Components/AllData";
import {BsFacebook} from 'react-icons/bs'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'
import Link from "next/link";

const Author = () => {
  const author = AllBlogdata.slice(0, 8);
  return (
    <div className="container">
      <h2 className="text-center mb-12">List of Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {author.map((item, index) => (
          <Link href={`/author/${item.authors.slug}`} key={index}>
            <div
            className="py-10 px-7 border border-lightgray bg-lightgray hover:border-lightyellow hover:bg-lightyellow flex flex-col items-center justify-center gap-4"
            key={index}
          >
            <div>
              <Image
                src={item.authors.image}
                width={128}
                height={128}
                alt="icon"
              />
            </div>
            <div className="gap-1 text-center">
              <h3>{item.authors.title}</h3>
              <span className="text-mediumgray font-inter text-sm font-normal leading-5">
                {item.authors.subTitle}
              </span>
            </div>
            <div className="flex flex-row items-center gap-4 ">
              <BsFacebook className="fill-black" />
              <BiLogoTwitter className="fill-black" />
              <AiOutlineInstagram className="fill-black" />
              <AiFillLinkedin className="fill-black" />
            </div>
          </div>



          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Author;
