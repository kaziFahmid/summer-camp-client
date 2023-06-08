import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function MyClasses() {
    const {data:classes=[]}=useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/classes')
          return res.json()
        },
      })
  return (
    <div>
      
    </div>
  )
}
