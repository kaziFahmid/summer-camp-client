import React from 'react'

import Heading from '../Heading/Heading'
import PopularInstructor from './PopularInstructor/PopularInstructor'

import PopularClass from './PopularClass/PopularClass'
import Banner from './Banner/Banner'
import AboutUs from './AboutUs/AboutUs'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'







export default function Home() {

  return (
    <div>
 <Banner/>
     
     <AboutUs/>
   <div className='mt-36'>   <Heading title="Popular Class" heading="Classes"/></div> 
      <PopularClass/>
<div className='mt-36'>      <Heading title="Popular Instructor" heading="Mentors"/></div>

      < PopularInstructor/>

 <WhyChooseUs/>


    </div>
  )
}
