import React, { useState } from 'react';
import './Habitat.css';
import rainForestImg from '../../assets/rainforest.png';  // Replace with your image paths
import savannahImg from '../../assets/savannah.png';
import oceanImg from '../../assets/ocean.png';
import next from '../../assets/next.png';
import previous from '../../assets/Previous.png';
import next_small from '../../assets/next_min.svg';
import previous_small from '../../assets/previous_min.svg';


const habitats = [
  {
    id: 1,
    title: "RAIN FORESTS",
    description: "Home to the richest biodiversity on the planet, rainforests are dense, tropical forests with high levels of rainfall. These lush ecosystems cover only 6% of the Earth's surface but are home to more than half of the world's plant and animal species. The dense canopy layer provides a habitat for numerous species, including monkeys, birds, insects, and plants. Rainforests play a critical role in regulating the Earth's climate by absorbing carbon dioxide and producing oxygen.",
    image: rainForestImg,
  },
  {
    id: 2,
    title: "SAVANNAHS",
    description: "Savannahs are expansive grasslands with scattered trees and shrubs, primarily found in Africa, South America, Australia, and India. These habitats support a wide variety of herbivores such as elephants, giraffes, zebras, and antelopes, which in turn attract predators like lions, cheetahs, and hyenas. The seasonal rainfall patterns in savannahs create a dynamic environment where water availability dictates the movement and behavior of its inhabitants.",
    image: savannahImg,
  },
  {
    id: 3,
    title: "OCEANS",
    description: "Covering 71% of the Earth's surface, oceans are home to an incredible array of marine life. From the shallow coastal waters to the deepest ocean trenches, this vast habitat supports a diverse range of species, including fish, mammals, corals, and invertebrates. Marine ecosystems such as coral reefs, kelp forests, and open oceans are crucial for maintaining global biodiversity and providing resources for human populations. Oceans also play a significant role in climate regulation by absorbing heat and carbon dioxide.",
    image: oceanImg,
  },
];

const Habitat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % habitats.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + habitats.length) % habitats.length);
  };

  const { title, description, image } = habitats[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-container">
      <div className="carousel-item">
        <img src={image} alt={title} className="carousel-image" />
        <div className="carousel-content">
          <h2>{title}</h2>
          <p>{description}</p>

        </div>
        
      </div>
      <div className="carousel-navigation">
        <button onClick={goToPrevious} className="carousel-nav-btn prev-btn"><img className='previous-large'src={previous} alt='next'/></button>
        <button onClick={goToPrevious} className="carousel-nav-btn prev-btn"><img className='previous-small' src={previous_small} alt='next'/></button>

        <button onClick={goToNext} className="carousel-nav-btn next-btn"><img className='next-large'src={next} alt='next'/></button>
        <button onClick={goToNext} className="carousel-nav-btn next-btn"><img className='next-small'src={next_small} alt='next'/></button>

      </div>
      

      </div>

    </div>
  );
};


export default Habitat;
