import React from 'react'

export default function InstructorsBox({_id,instructorname,image,email}) {
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl">
    <figure><img src={image}alt="Shoes"  className='h-72'/></figure>
    <div className="card-body">
      <h2 className="card-title">Name:{instructorname}</h2>

      <h2 className="card-title">Email:{email}</h2>
      
    </div>
  </div>
  )
}
