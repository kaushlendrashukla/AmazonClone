
import React, { useEffect, useState } from 'react'
import "./Home.css"

import ProductList from './ProductList'

function Home() {

  const [carousel, setCarousel] = useState(1)


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carousel <= 2) {
        setCarousel((prev) => prev + 1);
      } else {
        setCarousel(1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [carousel]);

  return (
    <div className='home'>
      <img className='home__carouselimg' src={`./images/carousel${carousel}.jpg`} alt="carousel" />
      <ProductList />
    </div>
  )
}

export default Home

