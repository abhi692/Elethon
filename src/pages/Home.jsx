import React from 'react';
import { Link } from 'react-router-dom';
import elewayte_logo from '../assests/elewayte_logo.png';

const Home = () => {

  return (
    <>
    <div className="container" style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <div>
        <img className='elewayte-logo' src={elewayte_logo} alt='company_logo'/>
      </div>
      <h1 className='animation'>Welcome to the Online <span>Hackathon</span></h1>
      <p className='second-para'>Presented by Elewayte</p>
      <p className='first-para'>Learn more about the theme, rules, and prizes for our Hackathon.</p>
      <Link to="/blog">
      <button className='btn-1'>Go to Blogs</button>
      </Link>
      <Link to="/register">
      <button className='btn-2'>Register Now</button>
      </Link>
    </div>
    </>
  );
}

export default Home;
