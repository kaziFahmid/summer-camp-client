import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function InstructorsBox({instructorname,image,email}) {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div data-aos="fade-right" className="card  w-full md:w-96 md:mx-auto bg-base-100 shadow-xl">
    <figure><img src={image}alt="Shoes"  className='md:h-72 '/></figure>
    <div className="card-body w-full">
      <h2 className="card-title">{instructorname}</h2>

      <h2>{email}</h2>
      <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
      
    </div>
  </div>
  )
}
