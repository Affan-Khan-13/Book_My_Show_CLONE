import DefaultHOC from './HOC/Default.HOC';
import Temp from './components/temp';



function App() {
  return (
    <>
    <DefaultHOC path="/" element={<Temp/>}/>
    
    </>
  );
}

export default App;


