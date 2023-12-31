import AOS from 'aos';
import 'aos/dist/aos.css'
import React from 'react'

const Banner = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
    
  return (
    <div className={`flex lg:flex-row flex-col mt-4 justify-around container bg-no-repeat lg:bg-right bg-contain     ${localStorage.getItem('theme') === 'dark' ? '' : 'lg:bg-[url(https://i.ibb.co/8MB5LZ0/Png-Item-1131316.png)]'}  pt-6 items-center `}>
      <div className='lg:ms-24   mt-9 lg:mt-0 ' data-aos="fade-right" >
<h1 className='uppercase text-6xl  md:text-6xl mb-6 font-bold   tracking-wider '>start become your<br className='lg:block hidden'></br> best <span className='text-orange-400 '>Version</span></h1>
<p className='text-slate-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus<br className='lg:block hidden'></br> dignissim faucibus id sit consequat. Vivamus quam senectus <br className='lg:block hidden'></br>vitae dolor ac.</p>

<div className='flex lg:flex-row flex-col lg:justify-start  justify-center mt-5 lg:items-center gap-12'>
    <div>
        <h3  className='text-5xl font-abc'>100+</h3>
        <p className='text-orange-400'>Mentor at tutorify</p>
    </div>
    <div>
        <h3 className='text-5xl font-abc'>205+</h3>
        <p className='text-orange-400'>Student Trusted us</p>
    </div>
    <div>
        <h3 className='text-5xl font-abc'>100+</h3>
        <p className='text-orange-400'>Student Success</p>
    </div>
</div>
      </div>

      <div >
<img src='https://i.ibb.co/nbHCnWc/icons8-team-Fc-Lyt7l-W5wg-unsplash-1.png' className='img-fluid  lg:h-screen'/>
      </div>
    </div>
  )
}

export default Banner
