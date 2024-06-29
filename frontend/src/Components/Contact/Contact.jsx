import React from 'react';
import './Contact.css'; // Make sure to create this CSS file for styling
import deerImage from '../../assets/Deer.svg'; // Save the deer image in the src folder

const Contact = () => {
  return (
    <div className="contact-form">
        <div className="Contactform-container"> 
        <div className="image-section">
        <img src={deerImage} alt="Deer" />
      </div>
      <div className="form-section">
        <h2>CONTACT US</h2>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-container">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
 </div>
     
  );
};

export default Contact;
