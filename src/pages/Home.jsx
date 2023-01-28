import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (

    <div className='container'>
      <h1>Welcome to the Online Elethon</h1>
      <p className='first-para'>Learn more about the theme, rules, and prizes for our Elethon.</p>
      <Link to="/schedule">
      <button className='btn-1'>Learn More</button>
      </Link>
      <Link to="/register">
      <button className='btn-2'>Register Now</button>
      </Link>
    </div>
  );
}

export default Home;
