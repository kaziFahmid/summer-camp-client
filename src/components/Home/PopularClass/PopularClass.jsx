import { useQuery } from '@tanstack/react-query'
import React from 'react'


export default function PopularClass() {
 
    const {data:classes=[]}=useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const res = await fetch('https://summer-camp-server-xi.vercel.app/classes',)
          return res.json()
        },
      })
     
      classes.sort((a, b) => b.
      studentsEnrolment - a.
      studentsEnrolment);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-4 container mx-auto max-w-6xl'>
        {classes.slice(0,6).map((cls,index)=>  <div key={index}  className=" antialiased text-gray-900">
<div>
    
    <img src={cls.image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md h-52"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className={`  ${localStorage.getItem('theme') === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}  p-6 rounded-lg shadow-lg`}>
    <div className="flex items-baseline">
      <span className="bg-orange-400 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-slate-400  uppercase text-xs font-semibold tracking-wider">
      {cls.seat} seats  
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{cls.name}</h4>
    <p className='text-sm text-slate-400'>{cls.instructorname}</p>
 
  <div className="mt-1">
    ${cls.price}
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
  <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <span className=" text-md font-semibold ms-3">4/5 ratings </span>
</div>
   
   
  </div>  
  </div>
 </div>
  
</div>
  </div>)}
      
    </div>
  )
}
