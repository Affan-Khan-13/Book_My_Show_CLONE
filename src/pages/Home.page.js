import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component'
//do not need anymore ---- import PremierComponent from '../components/Premier/Premier.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
//do not need anymore ---- import TempPosters from '../config/TempPosters.config'
import EntertainmentImage from '../config/EntertainmentPosters'

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const getImages = await axios.get("/MostPopularMovies/k_015l5c7t");
        console.log(getImages.data.items);
        setMovies(getImages.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    
    getData();
  }, []);

  return (
    <>
     <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(20,35)} title="Recommended Movies" subtitle=""/>
    </div>

    <div className='container mx-auto px-4 py-20 cursor-pointer'>
     <img 
     src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" 
     alt="BookMyShow"
     />
    </div>

    <div className='flex flex-col gap-10'>
    <div className='container mx-auto px-4'>
        <h1 className='text-2xl font bold text-gray-800 py-3 pt-5'>
             The best of Entertainment
        </h1>
      <EntertainmentCardSlider images={EntertainmentImage}/>
    </div>


    <div className='bg-navCol-200 py-16'>
      <div className='container mx-auto px-4'>
      <div className='flex'>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
        alt="Primear"
        className='w-full h-full'
        />
      </div>
        <PosterSlider isDark images={movies.slice(30,45)} title="Primere" subtitle="Brand new release every friday" />
      </div>
    </div>
    </div>

    <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(45,60)} title="Outdoor Events" subtitle=""/>
    </div>


    <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(60,75)} title="Events Happening Near You" subtitle=""/>
    </div>


    <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(75,90)} title="Online Events" subtitle=""/>
    </div>
    </>

    
  )
}

export default HomePage
