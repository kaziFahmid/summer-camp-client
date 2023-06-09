import React from 'react'
import ClassBox from './ClassBox'
import { useQuery } from '@tanstack/react-query'
import Heading from '../Heading/Heading'

export default function Classes() {

    const {data:classes=[]}=useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/classes',)
          return res.json()
        },
      })
  return (
<>
<Heading title="Class"/>
<div className='grid lg:grid-cols-3 grid-cols-1 mt-16 gap-4'>
        {classes.map((cls,index)=><ClassBox key={index} cls={cls} {...cls}/>)}
      
    </div>

</>
  )
}
