"use client";
import React from 'react'
import BlogHero from './Components/BlogHero'
import BlogPost from './Components/BlogPost'
import Category from './Components/Category';
import JoinTeam from '../home/Components/JoinTeam';


const page = () => {
  return (
    <>
    <BlogHero/>
    <BlogPost/>
    <Category/>
    <JoinTeam/>
    </>
  )
}

export default page