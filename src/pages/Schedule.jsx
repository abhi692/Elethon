import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../assests/blogpic1.jpg';
import img2 from '../assests/blogpic2.jpg';
import img3 from '../assests/blogpic3.jpg';
import img4 from '../assests/blogpic4.jpg';
import img5 from '../assests/blogpic5.jpg';
import img6 from '../assests/blogpic6.jpg';
import img8 from '../assests/blogpic8.jpg';
import img9 from '../assests/blogpic9.png';
import img10 from '../assests/blogpic10.jpg';
import img11 from '../assests/blogpic11.jpg';
import img12 from '../assests/blogpic12.jpg';
import img13 from '../assests/blogpic13.jpg';

const Schedule = () => {

  return (
    <section id='blog' style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <div className='home-div'>
        <Link to="/">
          <button className="homepage2" type="submit">Home</button>
        </Link>
      </div>
      <div className="blog-heading">
        <span>Elewayte Recent Posts</span>
        <h3>Elewayte Blogs</h3>
      </div>

      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img1} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Artificial Intelligence</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img2} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Machine Learning</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img3} alt="Blog"/>
          </div>
          <div className="blog-text2">
            <span>Mobile App Development</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img4} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Web Development</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img5} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Digital Marketing</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img6} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>AWS</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img8} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Python</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img9} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>AutoCAD</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img10} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Business Analytics</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img11} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>HR</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img12} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>IOT</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img13} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Stock Market</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatum soluta a totam. Consectetur ipsum numquam ullam, sapiente aperiam perferendis eveniet repellat, maiores eius nihil, iusto reprehenderit illum corrupti!</p>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
      <div className='abhi'>
          <h3>Blog written by Abhishek</h3>
        </div>
    </section>
  )
}

export default Schedule;
