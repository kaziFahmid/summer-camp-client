import React from 'react'
import Slider from './Slider/Slider'
import Heading from '../Heading/Heading'
import PopularInstructor from './PopularInstructor/PopularInstructor'
import Example from './Example'
import Example2 from './Example2'





export default function Home() {

  return (
    <div>
 
      <Slider/>
      <Heading title="Popular Class"/>
<div className='mt-36'>      <Heading title="Popular Instructor"/></div>

      < PopularInstructor/>

  <div className='mt-36 container mx-auto'>
<Example/>

    </div>

    <Example2/>
    </div>
  )
}
