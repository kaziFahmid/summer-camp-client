import React from 'react'

export default function ClassBox({_id,image,instructorname,name,seat,email,
    price
}) {
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl">
    <figure><img src={image}alt="Shoes"  className='h-72'/></figure>
    <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
      <h2 className="card-title">Instructor name:{instructorname}</h2>

      <h2 className="card-title">Seat:{seat}</h2>
      <h2 className="card-title">Price:{price}</h2>
    <button className='btn bg-pink-500 text-white
    '>Select Button</button>

    </div>
  </div>
  )
}
