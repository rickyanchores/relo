import React from 'react'

const Home = () => {
  return (
    <div className='Home flex flex-col justify-center items-center min-h-screen'>
        <div className="heroText h-72 w-screen flex justify-between items-end gap-60 px-6">
          <div className="title uppercase text-4xl">Premium Smart Watch Mockups</div>
          <div className="indicator text-gray-600 font-mono">
          <svg class="mt-2 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
            <p>Inspired by Semplice Design</p>
          </div>
        </div>
        <img className='heroImage p-8' src="https://www.semplice.com/wp-content/uploads/2021/08/smartwatch-supply-store-bg-scaled.jpg" alt="imgHero" />
    </div>
  )
}

export default Home;