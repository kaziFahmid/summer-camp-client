import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
export default function ManageClass() {
    const [open, setOpen] = useState(false);

    let id;
 
  const onCloseModal = () => setOpen(false);

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/classes')
          return res.json()
        },
      })
      

      let handleApprove=(_id)=>{
        axios.patch(`/classes/${_id}`)
        .then((response)=>{
            refetch()
            console.log(response)
        })
      }
      let handleDeny=(_id)=>{
        axios.patch(`/classes/deny/${_id}`)
        .then((response)=>{
            refetch()
            console.log(response)
        })
      }
   
      let handleSubmit=()=>{

        console.log("aklsdjf")
      }

   let onOpenModal =(_id) => {

    setOpen(true)
};



  return (
   <>
    <div>
 
    <Modal open={open} onClose={onCloseModal} center>
  <div className='w-96'>

  <h2 className='text-2xl mb-5'>FeedBack</h2>

<input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
<button className='btn bg-pink-500 mt-6 text-white' onClick={handleSubmit}>Submit</button>
  </div>
    </Modal>
  </div>
    <div className="overflow-auto h-96">
  <table className="table">
 
    <thead>

  
   <tr>
        <th>
       Sl
        </th>
        <th>Class Image</th>
        <th>Class name</th>
        <th>Instructor name</th>
        <th>Instructor email</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
    {classes.map((cls,index)=>{return <tr key={index}>
        <td >
         {index+1}
        
        </td>
        <td>

            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls.image} />
              </div>
            </div>
            

        </td>
        <td>
        {cls.name}
        </td>
        <td> {cls.instructorname}</td>
        <td>
        {cls.email}
        </td>

        <td>
        {cls.seat}
        </td>

        <td>
{cls.price}
        </td>
        <td>
            {cls.status=="approved"?"approved":cls.status=="denied"?"denied":"pending"}
     
   
        </td>

        <td>
       <button className='btn bg-pink-500 text-white
       ' onClick={()=>handleApprove(cls._id)} disabled={cls.status=='approved'?true:cls.status=="denied"?true:false}> Approve</button> <button className='btn bg-red-500 text-white
       '  onClick={()=>handleDeny(cls._id)} disabled={cls.status=='approved'?true:cls.status=="denied"?true:false}>Deny</button>  <button className='btn bg-yellow-400-500 text-black
       ' onClick={()=> onOpenModal(cls._id)} >Feedback</button>
        </td>
      </tr>
   
      
    })}
     
    
    </tbody>
 
  
    
  </table>
</div>
   
   
   </>
  )
}
