import React from 'react'
import InstructorsBox from './InstructorsBox'
import { useQuery } from '@tanstack/react-query'

export default function Instructors() {

const {data:instructors=[]}=useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await fetch('https://summer-camp-server-xi.vercel.app/instructors')
      return res.json()
    },
  })
 
  console.log( instructors)
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 mt-5 gap-4'>
{instructors.map((instructor,index)=><InstructorsBox key={index}{...instructor}/>)}
 
    </div>
  )
}
