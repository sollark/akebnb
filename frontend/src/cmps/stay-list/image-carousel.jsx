import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRef } from 'react'

export function ImageCarousel({ imgs }) {
  const carousel = useRef()

  const settings = {
    infinite: false,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    lazyLoad: true,
  }

  return (
    <div>
      <Slider ref={carousel} {...settings}>
        {imgs.map((item) => (
          <div key={item.id}>
            <img className='carousel-img' src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
