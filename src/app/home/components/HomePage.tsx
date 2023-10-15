import React from 'react'
import HomeHero from './HomeHero'
import Feature from './Feature'
import HomeAbout from './HomeAbout'
import Category from './Category'
import Author from './Author'

import AppFeature from './AppFeature'
import Testimonial from './Testimonial'
import JoinTeam from './JoinTeam'
import Passion from './passion'


const HomePage = () => {
  return (
    <>
    <HomeHero/>
    <Feature/>
    <HomeAbout/>
    <Category/>
    <Passion/>
    
    <Author/>
    <AppFeature/>
    <Testimonial/>
    <JoinTeam/>
    </>
  )
}

export default HomePage