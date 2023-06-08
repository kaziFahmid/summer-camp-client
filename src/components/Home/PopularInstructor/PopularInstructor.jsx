import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function PopularInstructor() {
    const {data:instructors=[]}=useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/instructors')
          return res.json()
        },
      })


      return<>
      <div className='grid lg:grid-cols-3 grid-cols-1 mt-32 gap-4'> 
      {instructors.slice(0,6).map((instructor,index)=> <div key={index} className="card w-96 mx-auto bg-base-100 shadow-xl">
    <figure><img src={instructor.image}alt="Shoes"  className='h-72'/></figure>
    <div className="card-body">
      <h2 className="card-title">Name:{instructor.instructorname}</h2>

      <h2 className="card-title">Email:{instructor.email}</h2>
      
    </div>
  </div>)}






      </div>
   
      
      
      </>
}
