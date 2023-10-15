"use client";
import React from "react";
import { useParams } from "next/navigation";
import { AllBlogdata } from "@/app/home/components/AllData";
import { BsFacebook } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const AuthorPage = () => {
  const param = useParams();
  const author = AllBlogdata.find((e) => e.authors.slug == param?.slug);
  const post = AllBlogdata.filter((e) => e.authors.slug == param?.slug);

  return (
    <div>
      <div className="bg-levender">
        <div className="container flex flex-col items-center justify-center py-32">
          <div className="flex flex-row gap-8">
            <div className="w-full h-[250px] lg:w-[251px] lg:h-[250px] relative">
              <Image src={author.authors.image} fill alt="author" />
            </div>

            <div className="w-full lg:w-[669px]">
              <h1 className="mb-8">
                Hey there, I’m {author?.authors.title} and welcome to my Blog
              </h1>
              <p className="mb-8 text-mediumgray">{author?.content}</p>
              <div className="flex flex-row items-center gap-6 ">
                <BsFacebook />
                <BiLogoTwitter />
                <AiOutlineInstagram />
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-row items-center justify-center ">
          <div className="w-full lg:w-[813px] h-[23px] bg-yellow"></div>
          <div className="w-full lg:w-[211px] h-[23px] bg-purple"></div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center py-32">
        <div className="w-full xl:w-[1024px] text-start ">
          <h1 className="pb-16">My Posts</h1>
        </div>

        <div className="flex flex-col gap-16 py-10">
          {post.map((item, index) => (
            <Link href={`/blog/${item.slug}`} key={index}>
              <div className="flex flex-col lg:flex-row justify-between gap-16">
                <div className="w-full h-[320px] lg:w-[412px] relative">
                  <Image src={item.image} fill objectFit="cover" alt="post" />
                </div>
                <div className="flex flex-col justify-center gap-5 w-full xl:w-[560px]">
                  <span className="text-purple font-inter uppercase text-base font-semibold leading-5 tracking-[3px]">
                    {item.category.name}
                  </span>
                  <h2>{item.title}</h2>
                  <p className="text-mediumgray">{item.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <Link
            href={`/author/${param.slug}/newblog`}
            className="button bg-yellow w-full h-14"
          >
            Create New Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
