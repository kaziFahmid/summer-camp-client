import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function MyClasses() {
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/classes')
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
