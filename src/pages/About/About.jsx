import React from 'react'

const About = () => {
  return (
    <div className='About flex justify-center items-center'>
      <div className="about-container bg-gray-800 w-[95%] p-4 grid grid-cols-1 md:grid-cols-2">
        <div className="item-description">
          <h3 className="text-gray-500 font-bold">Item Description</h3>
          <span></span>
          <p>Timeless smartwatch mockups, thoughtfully designed down to the smallest detail. Includes both rectangular and rounded dials for your UI or concept designs.

All files include Photoshop masks (so you can paste your design with one click) including separate backgrounds.</p>
        </div>
        <span></span>
        <div className="details font-thin text-gray-600">
        Format: Editable PSD & JPG
        Dimensions: 5000x2812px
        Scenes: 4 different perspectives
        </div>
        <div className="license">
          <h3 className="text-gray-500 font-bold">License</h3>
          <span></span>
          <h4>Personal License</h4>
          <button className='btn bg-orange-600 text-black font-semibold px-8'>BUY NOW $12</button>
          <span></span>
          <h4>Commercial License</h4>
          <button className='btn bg-orange-600 text-black font-semibold px-8'>BUY NOW $12</button>
        </div>
      </div>
    </div>
  )
}

export default About