import './App.css';
import Hero from './Components/Hero/Hero';
import Discover from './Components/Discover/Discover';
import Habitat from './Components/Habitats/Habitat';
import Donate from './Components/Donate/Donate';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Discover/>
      <Habitat/>
      <Donate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
