import React, { useState } from 'react';
import './Donate.css';
import img1 from '../../assets/frog_bg.svg';

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your donation, ${name}!`);
  };

  return (
    <div className='donate'>
      <div className="donateflex">
      <div className="leftsection">
            <div className="img1">
                <img src={img1} alt='frog'/>
            </div>    
        </div>

        <div className="rightsection">
            <h1>GET INVOLVED</h1>
            <p>Join us in making a difference. There are many ways you can help protect wildlife and their habitats. Whether through financial support, volunteering your time, spreading awareness, or educating others, your involvement is crucial to the success of conservation efforts.</p>
            <h2>DONATE</h2>
            <p>Your contributions can support critical conservation efforts. Donations are vital for funding various projects, including habitat restoration, wildlife protection, research, and educational programs. Every contribution, big or small, helps ensure that we can continue our work to protect endangered species and their environments. You can choose to make a one-time donation or set up recurring contributions to provide ongoing support.</p>

        </div>

      </div>
        
      <div className="donate-now">
      <h2>DONATE NOW</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <button type="submit">Submit Now</button>
      </form>
    </div>
      
    </div>
  )
}

export default Donate;