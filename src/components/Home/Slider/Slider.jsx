import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  return (
    <Carousel>
    <div >
        <img src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg" />

    </div>
    <div >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/666/335/small/language-tutor-word-concepts-banner-video-tutorials-courses-speaking-club-presentation-foreign-language-learning-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg"  />

    </div>
    <div >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/666/332/small/language-learning-word-concepts-banner-grammar-speaking-communication-skills-foreign-language-online-school-self-education-isolated-lettering-typography-outline-illustration-vector.jpg" />
       
    </div>
</Carousel>
  )
}
