import React from 'react';

const Home = () => {

    const handleClick = () => {
        console.log("clicked");
    }

  return (

    <div className='container'>
      <h1>Welcome to the Online Elethon</h1>
      <p className='first-para'>Learn more about the theme, rules, and prizes for our Elethon.</p>
      <button onClick={handleClick} className='btn-1'>Learn More</button>
      <button className='btn-2'>Register Now</button>
    </div>
  );
}

export default Home;
