import React from 'react'

export default function InstructorsBox({instructorname,image,email}) {
  return (
    <div className="card  w-full md:w-96 md:mx-auto bg-base-100 shadow-xl">
    <figure><img src={image}alt="Shoes"  className='md:h-72 '/></figure>
    <div className="card-body w-full">
      <h2 className="card-title">Name:{instructorname}</h2>

      <h2>Email:{email}</h2>
      
    </div>
  </div>
  )
}
