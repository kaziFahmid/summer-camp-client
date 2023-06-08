import React from 'react'
import useAuth from '../UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'

export default function MyEnrolledClass() {
  const{user}=useAuth()
  const {refetch,data:myEnrolledClass=[]}=useQuery({
    queryKey: ['myEnrolledClass'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payments`)
      return res.json()
    },
  })
  return (
    <div>
       <div>
      <div className="overflow-x-auto  overflow-y-auto h-96">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Image</th>
        <th>Class</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>TransactionId</th>
        <th>Price</th>
        <th>My Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

    {myEnrolledClass.map((myEnrCls,index)=>{ return <tr key={index}>
      <td>{index+1}</td>
        <td>
        <div className="mask mask-squircle w-12 h-12">
                <img src={myEnrCls.image} />
              </div>
        </td>
        <td>{myEnrCls.name}</td>
        <td>{myEnrCls.instructorname}</td>
        <td>{myEnrCls.email}</td>
        <td>{myEnrCls.transactionId}</td>
        <td>{myEnrCls.price}</td>
        <td>{myEnrCls.myemail}</td>
        <td>{myEnrCls.status}</td>
        
      </tr>})}  
     
    </tbody>
  </table>
</div>
    </div>
      
    </div>
  )
}
