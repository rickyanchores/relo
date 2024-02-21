import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className='Card' data-aos="fade-up" data-aos-duration="4000">
        <img src={image} alt="image" />
        <p>TItle: {title}</p>
    </div>
  )
}

export default Card;