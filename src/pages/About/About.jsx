import React from 'react'

const About = () => {
  return (
    <div className='About'>
      <div className="about-container mx-2 p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="item-description">
          <h1 className="text-gray-500 font-bold border-b-2 border-gray-600 text-4xl">Item Description</h1>
          <span></span>
          <p className='mt-4'>Timeless smartwatch mockups, thoughtfully designed down to the smallest detail. Includes both rectangular and rounded dials for your UI or concept designs.

All files include Photoshop masks (so you can paste your design with one click) including separate backgrounds.</p>
          <span></span>
          <div className="details font-thin text-gray-600 flex flex-col mt-4">
            <p>Format: Editable PSD & JPG</p>
            <p>Dimensions: 5000x2812px</p>
            <p>Scenes: 4 different perspectives</p>
          </div>
        </div>
        <div className="license ">
          <h1 className="text-gray-500 border-b-2 border-gray-600 font-bold text-4xl">License</h1>
          <div className="box-container">
            <div className="box mt-4">
                <h2>Personal License</h2>
                <button className='btn bg-orange-600 text-black font-mono px-8 mt-2'>BUY NOW $12</button>
              </div>
              <div className="box mt-4">
                <h2>Commercial License</h2>
                <button className='btn border-white border-2 text-white font-mono px-8 mt-2'>BUY NOW $12</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About