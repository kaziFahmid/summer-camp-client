import React from 'react'
import Slider from './Slider/Slider'
import Heading from '../Heading/Heading'
import PopularInstructor from './PopularInstructor/PopularInstructor'
import Example from './Example'
import Example2 from './Example2'
import PopularClass from './PopularClass/PopularClass'
import Support from '../Support/Support'
import Work from '../Support/Support'
import Contactus from './Contactus/Contactus'





export default function Home() {

  return (
    <div>
 
      <Slider/>
      <Heading title="Popular Class"/>
      <PopularClass/>
<div className='mt-36'>      <Heading title="Popular Instructor"/></div>

      < PopularInstructor/>

  <div className='mt-36 container mx-auto'>
<Example/>

    </div>

    <Example2/>

    <Work/>

    <Contactus/>
    </div>
  )
}
