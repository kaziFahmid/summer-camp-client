import React from 'react'
import useAuth from '../UseAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useInstructor() {
    const {user}=useAuth()
    const token=localStorage.getItem('access-token')
        const { data: isInstructor = [],isLoading:isInstructorLoading} = useQuery({
            queryKey: ['isInstructor',user?.email],
            queryFn: async () => {
              const res = await fetch(`https://summer-camp-server-xi.vercel.app/users/instructor/${user?.email}`,{
                headers:{
                  authorization:`bearer ${token}`
                }
              });
              return res.json();
            },
          });
    
    
    
      return [isInstructor,isInstructorLoading]
}
