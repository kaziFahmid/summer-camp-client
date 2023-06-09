import React from 'react'
import useAuth from '../UseAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useAdmin() {
const {user}=useAuth()
const token=localStorage.getItem('access-token')
    const { data: isAdmin = [],isLoading:isAdminLoading} = useQuery({
        queryKey: ['isAdmin',user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          });
          return res.json();
        },
      });



  return [isAdmin,isAdminLoading]
}
