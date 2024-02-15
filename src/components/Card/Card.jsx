import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className='Card'>
        <img src={image} alt="image" />
        <p>TItle: {title}</p>
    </div>
  )
}

export default Card