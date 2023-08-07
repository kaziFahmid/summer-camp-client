import React from 'react'
import { BsFillCheckSquareFill} from 'react-icons/bs';
const WhyChooseUs = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 max-w-5xl mx-auto mt-40'>
      <div className='flex justify-center items-center flex-col'>
     <div>
     <p className='text-orange-400'>Why US</p>
        <h1 className='text-6xl font-bold'>Why Choose Us</h1>
        <ul>
            <li className='flex mt-11 justify-center items-center gap-5'> <BsFillCheckSquareFill className='text-orange-400 text-3xl'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.</li>
            <li className='flex mt-11 justify-center items-center gap-5'> <BsFillCheckSquareFill className='text-orange-400 text-3xl'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.</li>
              <li className='flex mt-11 justify-center items-center gap-5'> <BsFillCheckSquareFill className='text-orange-400 text-3xl'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.</li>
        </ul>

     </div>
      </div>
      <div>
        <img src='https://i.ibb.co/Sy5k2wY/pngegg-5.png' className='img-fluid'/>
      </div>
    </div>
  )
}

export default WhyChooseUs
