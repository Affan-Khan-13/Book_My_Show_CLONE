import DefaultHOC from './HOC/Default.HOC';
import MovietHOC from './HOC/Movie.HOC';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import HomePage from './pages/Home.page';
import Movie from './pages/Movie';
import Plays from './pages/Plays.page';


axios.defaults.baseURL = "https://imdb-api.com/en/API";
axios.defaults.params = {};
axios.defaults.params['{apiKey}'] = process.env.REACT_APP_API_KEY ;



function App() {
  return (
    <>
    <DefaultHOC path="/" exact element={<HomePage/>}/>
    <MovietHOC path="/movie" exact element={<Movie/>}/>
    <DefaultHOC path="/plays" exact element={<Plays/>}/>
    </>
  );
}

export default App;


