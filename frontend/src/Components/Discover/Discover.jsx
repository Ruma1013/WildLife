// src/components/Discover/Discover.jsx
import React, { useState } from 'react';
import './Discover.css';
import discoverItems from '../../assets/Discover'; // Corrected import statement

const Discover = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className='discover'>
      <div className="discoverheader">
        <h2>DISCOVER US</h2>
      </div>
      <div className="discover-container">
        {discoverItems.map((item) => (
          <div 
            key={item.id} 
            className={`discover-item ${selectedId === item.id ? 'show' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <div className="discover-details">
              <h3>{item.name}</h3><hr/>
              <p>{item.description}</p><hr/>
              <p><strong>Habitat:</strong></p>
              <p> {item.Habitat}</p>
              <p><strong>Conservation Status:</strong></p>
              <p> {item.Conservation_Status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
