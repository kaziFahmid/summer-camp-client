import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  return (
   <div>
     
    <Carousel>
    <div >
        <img src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" />
<p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum officiis quas sit. Quibusdam, debitis accusantium totam doloribus at praesentium? Nemo error vitae delectus similique provident culpa, labore ipsum beatae?</p>
    </div>
    <div >
        <img src="https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"  />
        <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum officiis quas sit. Quibusdam, debitis accusantium totam doloribus at praesentium? Nemo error vitae delectus similique provident culpa, labore ipsum beatae?</p>

    </div>
    <div >
        <img src="https://plus.unsplash.com/premium_photo-1663047291494-b29cb4f0df9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum officiis quas sit. Quibusdam, debitis accusantium totam doloribus at praesentium? Nemo error vitae delectus similique provident culpa, labore ipsum beatae?</p>
       
    </div>
</Carousel>
   </div>
  )
}
