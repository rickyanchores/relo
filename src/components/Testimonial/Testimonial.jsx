import React from 'react'

const Testimonial = () => {
  return (
    <div className='Testimonial m-4 flex justify-center items-center min-h-screen'>
      <div className="contaner p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="testimonial-text">
          <h1 className="font-bold text-2xl">Relo Time is Yours</h1>
          <p className="text-black font-mono text-6xl">More from Semplice Supply</p>
        </div>
        <img data-aos="fade-up" data-aos-duration="6000" src="https://www.semplice.com/wp-content/uploads/2021/08/businesscard-black-suppy-CTA-2.png" alt="imageBanner1" />
        <img data-aos="fade-up" data-aos-duration="8000" src="https://www.semplice.com/wp-content/uploads/2021/08/warped-suppy-CTA.png" alt="imageBanner2" />
      </div>
    </div>
  )
}

export default Testimonial; 