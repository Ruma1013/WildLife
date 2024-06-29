import React, { useState } from 'react';
import './Donate.css';
import img1 from '../../assets/frog_bg.svg';
import img2 from '../../assets/elephant_bg.jpg';

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

    <div className="donateflex2">
    <div className="leftsection-2">
            <h2>VOLUNTEER</h2>
            <p>Join conservation projects and work on the front lines to save wildlife. Volunteering offers a hands-on way to make a real impact. Opportunities include fieldwork, such as monitoring wildlife populations, participating in habitat restoration, and assisting in rescue and rehabilitation efforts. Office-based roles, such as fundraising, event planning, and administrative support, are also available. By volunteering, you gain a deeper understanding of conservation challenges and contribute directly to meaningful solutions.</p>
            <h2>SPREAD AWARENESS</h2>
            <p>Educate others about the importance of wildlife conservation. Raising awareness is a powerful tool in the fight to protect wildlife. Share information with your friends, family, and community through social media, local events, and educational workshops. Advocate for conservation issues and encourage others to support wildlife protection initiatives. By spreading the word, you can help build a larger, more informed community committed to making a difference.</p>

    </div>

    <div className="rightsection-2">
            <div className="img1">
                <img className='img2'src={img2} alt='frog'/>
            </div>    
    </div>

    </div>


      
    </div>
  )
}

export default Donate;