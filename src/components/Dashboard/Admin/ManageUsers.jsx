import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function ManageUsers() {
  const token=localStorage.getItem('access-token')
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/users',{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })

      let handleAdmin=(_id)=>{
        axios.patch(`/users/admin/${_id}`)
        .then((response)=>{

            refetch()
                
           
            console.log(response)
        })
      }

      let handleInstructor=(_id)=>{
        axios.patch(`/users/instructor/${_id}`)
        .then((response)=>{
            refetch()
            console.log(response)
        })
      }
  return (
    <div>
        <h1 className='text-2xl'>Total Users: {users.length}</h1>
  <div className="overflow-x-auto overflow-y-scroll h-96 " >
  <table className="table table-zebra" >
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody >
    {users.map((user, index) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn bg-pink-500'onClick={()=>handleAdmin(user._id)}disabled={user.role=="admin"&&true}>Admin</button>
        <button className='btn bg-pink-500' onClick={()=>handleInstructor(user._id)}disabled={user.role=="instructor"&&true}>Instructor</button>
      </td>
    </tr>
  );
})}
      
    
    </tbody>
  </table>
</div>
    </div>
  )
}
