import React from 'react'
import useAuth from '../UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'

export default function PaymentHistory() {
  const{user}=useAuth()
  const {refetch,data:paymenthistory=[]}=useQuery({
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

    {paymenthistory.map((paymenthistory,index)=>{ return <tr key={index}>
      <td>{index+1}</td>
        <td>
        <div className="mask mask-squircle w-12 h-12">
                <img src={paymenthistory.image} />
              </div>
        </td>
        <td>{paymenthistory.name}</td>
        <td>{paymenthistory.instructorname}</td>
        <td>{paymenthistory.email}</td>
        <td>{paymenthistory.transactionId}</td>
        <td>{paymenthistory.price}</td>
        <td>{paymenthistory.myemail}</td>
        <td>{paymenthistory.status}</td>
        
      </tr>})}  
     
    </tbody>
  </table>
</div>
    </div>
      
    </div>
  )
}
