import React from 'react'
import Card from '../../components/Card/Card';

const Gallery = () => {

  const Cards = [
    {
      image: "https://www.semplice.com/wp-content/uploads/2021/08/Essential-watch-01-Supply-White.jpg",
      title: "Title One"
    },
    {
      image: "https://www.semplice.com/wp-content/uploads/2021/08/Essential-watch-02-Supply-White.jpg",
      title: "Title Two"
    },
    {
      image: "https://www.semplice.com/wp-content/uploads/2021/08/Essential-watch-03-Supply-White.jpg",
      title: "Title Three"
    },
    {
      image: "https://www.semplice.com/wp-content/uploads/2021/08/Essential-watch-04-Supply-White.jpg",
      title: "Title Four"
    }
  ]


  return (
    <div className='Gallery flex justify-center items-center min-h-screen'>
      <div className="box-container p-8">
        <h1 className="text-gray-500 mb-8 font-bold border-t-2 border-gray-600 text-4xl">Includes the following 4 scenes</h1>
        <div className="gallery-container grid grid-cols-1 md:grid-cols-4 gap-4">
          {Cards.map((card) => {
            return(
              <Card image={card.image} title={card.title} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery;