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
    <div className='grid grid-cols-1 md:grid-cols-3 mt-14 gap-4 container mx-auto'>
        {classes.slice(0,6).map((cls,index)=>  <div key={index}className={`card w-96 mx-auto bg-base-100 shadow-xl `}>
      <figure>
        <img src={cls.image} alt="Shoes" className="h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {cls.name}</h2>
        <h2 className="card-title">Instructor name: {cls.instructorname}</h2>

        <h2 className="card-title">Seat: {cls.seat}</h2>
        <h2 className="card-title">Price: {cls.price}</h2>

      
      </div>
    </div>)}
      
    </div>
  )
}
