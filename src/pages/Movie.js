import React,{useState, useEffect} from 'react'
import axios from 'axios';
import MovieHero from '../components/MovieHero/MovieHero.component';
import {BiCameraMovie} from "react-icons/bi"
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import CastImage from '../config/CastPoster';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const Movie = () => {
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
    <MovieHero/>

    <div className="my-12 container px-4 lg:w-2/3 lg:ml-36">
   <div className="flex flex-col items-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
   </div>
   <div className="my-8"></div>
   <hr/>
   </div>

   <div className="my-12 container px-4 lg:w-2/3 lg:ml-36">
   <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
      <div className="my-8"></div>
      <hr/>
      </div>

      
      <div className="my-10 container px-4 lg:w-2/3 lg:ml-36">
      <h1 className="text-gray-800 font-bold text-2xl mb-4">Cast</h1>
      <EntertainmentCardSlider images ={CastImage} isMovie />

      <div className="my-8"></div>
      <hr/>
      </div>

      <div className="my-10 container px-4 lg:w-2/3 lg:ml-36">
      <h1 className="text-gray-800 font-bold text-2xl mb-4">Crew</h1>
      <EntertainmentCardSlider images ={CastImage} isMovie/>

      <div className="my-8"></div>
      <hr/>
      </div>

      
    <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(45,60)} title="Outdoor Events" subtitle=""/>
      <div className="my-8"></div>
      <hr/>
   
    </div>

    <div className='container mx-auto px-4'>
      <PosterSlider images={movies.slice(60,75)} title="Events Happening Near You" subtitle=""/>
    </div>
    </>
  );
};

export default Movie
