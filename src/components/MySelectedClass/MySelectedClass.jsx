
import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import useSelectedClass from '../useSelectedClass/useSelectedClass'

export default function MySelectedClass() {
  const[refetch,myselectedclass]=useSelectedClass()
  let handleDelete=(_id)=>{

    axios.delete(`/myselectedclass/${_id}`)
    .then(function (response) {
      refetch()
      console.log(response);
    })
  }


  return (
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
       
        <th>Seat</th>
        <th>Instructor Email</th>
        <th>My Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

    {myselectedclass.map((mycls,index)=>{ return <tr key={index}>
      <td>{index+1}</td>
        <td>
        <div className="mask mask-squircle w-12 h-12">
                <img src={mycls.image} />
              </div>
        </td>
        <td>{mycls.name}</td>
        <td>{mycls.instructorname}</td>
     
        <td>{mycls.seat}</td>
        <td>{mycls.email}</td>
        <td>{mycls.myemail}</td>
        <td><Link to={`/dashboard/payment/${mycls._id}`}><button className="btn btn-warning">Pay</button></Link><button className="btn btn-error ms-2" onClick={()=>handleDelete(mycls._id)}>Delete</button></td>
      </tr>})}  
     
    </tbody>
  </table>
</div>
    </div>
  )
}
