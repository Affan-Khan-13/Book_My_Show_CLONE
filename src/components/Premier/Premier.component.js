import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/poster.component';

const PremierComponent = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0
      };

     const PremierImages = [
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },
        {
            src : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
            alt : "80 for Brady",
            title: "80 for Brady",
            subtitle: "English"
        },

    ]; 
  return (
    <>
      <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image}/>
        ))}
      </Slider>
    </>
  )
}

export default PremierComponent
