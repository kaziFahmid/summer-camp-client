import React from 'react'

export default function Acordion() {
  return (
    <div className="join join-vertical w-full">
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" checked="checked" /> 
      <div className="collapse-title text-xl font-medium">
        Course Overview
      </div>
      <div className="collapse-content"> 
        <p>
          Our Language Course: 
          Learn a new language and broaden your horizons!
        </p>
        {/* Rest of the content */}
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
        Course Structure
      </div>
      <div className="collapse-content"> 
      <p>
        Key Features:
        - Interactive lessons with native speakers
        - Practical exercises to improve listening, speaking, reading, and writing skills
        - Cultural insights and understanding
        - Flexible schedules to accommodate your availability
        - Small class sizes for personalized attention
      </p>
       
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
        Enroll Now
      </div>
      <div className="collapse-content"> 
        <p>    Description:
        Our language course offers comprehensive and immersive language learning experiences. Whether you are a beginner or looking to improve your language skills, our course has something for everyone. Our team of experienced language instructors will guide you through interactive lessons, engaging activities, and real-life conversations to enhance your language proficiency.</p>
        {/* Rest of the content */}
      </div>
    </div>
  </div>
  
  )
}
