import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselPage.css'


function CarouselPage() {
  return (
    <div className='page'>

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />

      <Carousel.Caption/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
      <Carousel.Caption/>
    </Carousel.Item>
  </Carousel>
  
  </div>
  )
}

export default CarouselPage
