import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../UseAuth/useAuth'

export default function MyClasses() {
  const{user}=useAuth()
  const token=localStorage.getItem('access-token')
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-server-xi.vercel.app/classes/instructor?email=${user?.email}`,{
        headers:{
          authorization:`bearer ${token}`
        }
      })
      return res.json()
    },
  })


  return (
    <div>
      <div className="overflow-x-auto overflow-y-auto h-96">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Instructorname</th>
              <th>Email</th>
              <th>Name</th>
              <th>Seat</th>
              <th>Price</th>
              <th>Total Student Enrolment</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={cls?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                <td>{cls?.instructorname}</td>
                <td>{cls?.email}</td>
                <td>{cls?.name}</td>
                <td>{cls?.seat}</td>
                <td>{cls?.price}</td>
                <td>{cls?.studentsEnrolment||0}</td>
                <td>{cls?.status}</td>
                <td>{cls?.status === 'pending' || cls?.status === 'approved' ? '' : cls?.feedback}</td>
                <td><button className='btn bg-pink-500 text-white'>Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
