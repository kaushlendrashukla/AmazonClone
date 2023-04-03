
import React ,{useEffect, useState} from 'react'
import "./Home.css"
import Product from './Product'

function Home() {

  const [carousel , setCarousel] = useState(1)


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carousel <= 2) {
        setCarousel((prev) => prev + 1);
      } else {
        setCarousel(1); 
      }
      console.log('carousel:', carousel);
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [carousel]);

  return (
    <div className='home'>
      <img className='home__carouselimg' src={`./images/carousel${carousel}.jpg`} alt="carousel" />
      <div className='home__row'>
      <Product
      key={123451}
      id={123451} 
      title="BENQ.. 32Inches Liquid Cryst.."
      price={17230}
      rating={5}
      image="./images/product1.jpg"
      />
       <Product
      key={123452}
      id={123452} 
      title="Automatic Toster 4 star grading "
      price={2235}
      rating={2}
      image="./images/product2.jpg"
      />
      </div>
      <div className='home__row'>
      <Product
      key={123453}
      id={123453} 
      title="Ptron truely wireless 12mm jack.."
      price={795}
      rating={5}
      image="./images/product3.jpg"
      />
       <Product
      key={123454}
      id={123454} 
      title="Nikon Camera with two lenses 12 Dia"
      price={69452}
      rating={4}
      image="./images/product4.jpg"
      />
       <Product
      key={123455}
      id={123455} 
      title="VIVo  5G Blaze White.."
      price={13112}
      rating={4}
      image="./images/product5.jpg"
      />
      
      </div>
      <div className='home__row'>
      <Product
      key={123456}
      id={123456} 
      title="Stovekart three layer chulha"
      price={3242}
      rating={3}
      image="./images/product6.jpg"
      />
      </div>
    </div>
  )
}

export default Home