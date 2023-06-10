import React from 'react'
import useAuth from '../UseAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useStudent() {
    const {user}=useAuth()
    const token=localStorage.getItem('access-token')
        const { data: student= [],isLoading:isStudentLoading} = useQuery({
            queryKey: ['student',user?.email],
            queryFn: async () => {
              const res = await fetch(`https://summer-camp-server-xi.vercel.app/users/student/${user?.email}`,{
                headers:{
                  authorization:`bearer ${token}`
                }
              });
              return res.json();
            },
          });
    
    
    
      return [student,isStudentLoading]
}
