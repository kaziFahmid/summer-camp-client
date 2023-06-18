
import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import useSelectedClass from '../useSelectedClass/useSelectedClass'
import Swal from 'sweetalert2'

export default function MySelectedClass() {
  const[refetch,myselectedclass]=useSelectedClass()
  let handleDelete=(_id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/myselectedclass/${_id}`)
        .then(function (response) {
          if(response.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          refetch()
          
         
          
        })
      
      }
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
