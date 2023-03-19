import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import elewayte_logo from '../assests/elewayte_logo.png';
import 'boxicons';

const Home = () => {

    let btn= document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    window.onload = function(){ 
      btn.onclick = function() {
      sidebar.classList.toggle("active");
  };
    }

  return (
    <>
    <div className="container" style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name"></div>
          <i className='bx bx-menu' id='btn'></i><br/>
          <ul className='nav_list'>
            <li>
              <a href='#'> 
              <i className='bx bxs-calendar'></i>
              <span className='links_name'> Schedule</span>
              </a>
              <span className='tooltip'>Schedule</span>
            </li>
            <li>
              <a href='#'>
              <i className='bx bxl-blogger'></i>
              <span className='links_name'> Blogs</span>
              </a>
              <span className='tooltip'>Blogs</span>
            </li>
            <li>
              <a href='#'>
              <i className='bx bx-trophy'></i>
              <span className='links_name'> FAQ & Prizes</span>
              </a>
              <span className='tooltip'>FAQ & Prizes</span>
            </li>
            <li>
              <a href='#'>
              <i className='bx bxs-calendar'></i>
              <span className='links_name'> Register</span>
              </a>
              <span className='tooltip'>Register</span>
            </li>
          </ul>
          

        </div>
      </div>
    </div>
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