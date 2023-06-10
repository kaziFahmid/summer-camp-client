import React from 'react'
import useAuth from '../UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'

export default function useSelectedClass() {

    const{user}=useAuth()
    const token=localStorage.getItem('access-token')
    const {refetch,data:myselectedclass=[]}=useQuery({
      queryKey: ['myselectedclass'],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/myselectedclass?email=${user?.email}`,{
          headers:{
            authorization:`bearer ${token}`
          }
        })
        return res.json()
      },
    })

  return [refetch,myselectedclass]
}
