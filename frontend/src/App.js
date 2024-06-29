import './App.css';
import Hero from './Components/Hero/Hero';
import Discover from './Components/Discover/Discover';
import Habitat from './Components/Habitats/Habitat';
import Donate from './Components/Donate/Donate';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Discover/>
      <Habitat/>
      <Donate/>
      
    </div>
  );
}

export default App;
