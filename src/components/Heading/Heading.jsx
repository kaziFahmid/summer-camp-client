import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <p className='text-center text-orange-400 mb-4 font-semibold'>{props.heading}</p>
      <h1 className='text-center text-5xl font-medium '>{props.title}</h1>
    </div>
  )
}
