import React from 'react'
import HeroSlider from 'react-slick'
import { NextArrow,PrevArrow } from './Arrows.component';



const HeroCarousal = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>    
      }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };

      const images = [
        "https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1681817127679-7b229656d3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1682686581221-c126206d12f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://plus.unsplash.com/premium_photo-1665657351427-efdfbf01fb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ]
  return (
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {
            images.map((image)=>(
                <div className='w-full h-64 md:h-80 py-3'>
                    <img src={image} alt='testing' className='w-full h-full rounded-md px-1'/>
                </div>
            ))
        }
    </HeroSlider>
    </div>
  
    <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={image}
      alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

      </>
  
  )
}

export default  HeroCarousal
