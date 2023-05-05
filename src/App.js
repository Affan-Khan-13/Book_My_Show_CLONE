import DefaultHOC from './HOC/Default.HOC';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';


function App() {
  return (
    <>
    <DefaultHOC path="/" element={<HomePage/>}/>
    
    </>
  );
}

export default App;


