import React from 'react'

const AboutUs = () => {
  return (
    <div className='grid lg:grid-cols-2  max-w-6xl mx-auto grid-cols-1 mt-24 gap-32 items-center'>
      <div>
        <img src='https://i.ibb.co/HzFf7vg/Pngtree-hand-drawn-girl-reading-book-4050570.png' className='img-fluid'/>
      </div>
      <div>
        <span className='text-orange-400 mb-6'>About Us</span>
        <h1 className='text-4xl font-bold'>Ready to help you learn English in private</h1>
<p className='mt-5 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dignissim faucibus id sit consequat. Vivamus quam senectus vitae dolor ac.</p>
<div>
    <button className='text-white bg-orange-400 py-4 px-16 mt-5'>Get Started</button>
</div>
      </div>
    </div>
  )
}

export default AboutUs
