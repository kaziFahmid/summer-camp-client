import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <h1 className='text-center text-5xl'>{props.title}</h1>
    </div>
  )
}
