import { useQuery } from '@tanstack/react-query'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React from 'react'

export default function PopularInstructor() {
    const {data:instructors=[]}=useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
          const res = await fetch('https://summer-camp-server-xi.vercel.app/instructors')
          return res.json()
        },
      })
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
 
    
      return<>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto grid-cols-1 mt-32 gap-4'> 
      {instructors.slice(0,6).map((instructor,index)=>{return  <div data-aos="zoom-in" key={index} className={` bg-white  px-6 py-6  rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ${localStorage.getItem('theme') === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}` }>
    
      <div className="relative">
        <img className="img-fluid rounded-xl h-60 object-contain  w-full" src={instructor.image} alt="Colors" />
        <p className="absolute top-0 bg-orange-400 text-white  font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Best</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">      {instructor.instructorname}</h1>
  <p className="text-slate-400">{instructor.email}</p>
  <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
      
    </div>
      })}






      </div>
     
      
      </>
}
