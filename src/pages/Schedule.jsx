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
            <p>Artificial Intelligence (AI) is a field of computer science that involves developing systems that can perform tasks that typically require human intelligence. These systems can use algorithms, statistical models, and machine learning to analyze and process data, learn from their experiences, and improve their performance over time.
            AI has many applications, including natural language processing, computer vision, and robotics. It has the potential to revolutionize many industries, such as healthcare, finance, and transportation. However, there are also concerns about the potential risks and ethical implications of AI, such as job displacement, biased decision-making, and the development of autonomous weapons.
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img2} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Machine Learning</span>
            <p>Machine learning is a type of artificial intelligence that involves training machines to learn from data and make decisions based on that data. It uses algorithms and statistical models to identify patterns and relationships in the data, and it can be applied to a wide range of tasks, including image recognition, natural language processing, and predictive analytics. Machine learning is a rapidly developing field with many potential applications, and it has the potential to transform many aspects of society in the coming years.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img3} alt="Blog"/>
          </div>
          <div className="blog-text2">
            <span>Mobile App Development</span>
            <p>Mobile app development involves creating software applications for mobile devices such as smartphones and tablets. This process includes designing the user interface, programming the functionality, and testing the app. There are different frameworks available, including native, hybrid, and web app development. Mobile apps have various purposes, and mobile app development is an essential field as mobile devices play an increasingly important role in daily life.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img4} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Web Development</span>
            <p>Web development involves creating websites and web applications using a variety of programming languages, frameworks, and tools. This includes designing the website's layout, writing the code for its functionality, and ensuring that it is optimized for performance and user experience. Web developers may specialize in front-end development, which involves creating the user interface, or back-end development, which involves programming the server-side functionality. As the internet continues to be an essential part of modern life, web development is a critical field with many opportunities for innovation and growth.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img5} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Digital Marketing</span>
            <p>Digital marketing is the use of digital channels, such as search engines, social media, email, and websites, to promote products or services and engage with customers. It involves creating and implementing marketing strategies that leverage these channels to reach and engage with target audiences. Digital marketing also involves tracking and analyzing the performance of marketing campaigns to optimize their effectiveness. As more and more people spend time online, digital marketing has become an essential aspect of modern marketing and business operations.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img6} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>AWS</span>
            <p>AWS (Amazon Web Services) is a cloud computing platform that provides a range of services for businesses and individuals. It offers storage, computing, networking, and database services, as well as other features such as analytics, machine learning, and IoT (Internet of Things). AWS allows users to rent computing power and storage resources on a pay-as-you-go basis, making it an affordable and scalable solution for businesses of all sizes. As one of the most popular cloud computing platforms in the world, AWS is used by millions of customers in a wide range of industries and applications.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img8} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Python</span>
            <p>Python is a high-level, interpreted programming language that is widely used in various applications, including web development, data analysis, machine learning, and artificial intelligence. It is known for its simplicity and readability, making it an ideal language for beginners and experienced programmers alike. Python is open-source, which means it is freely available and can be used and modified by anyone. Its extensive library of pre-built modules and tools, combined with its versatility and ease of use, have made Python one of the most popular programming languages in the world.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img9} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>AutoCAD</span>
            <p>AutoCAD is a computer-aided design (CAD) software that is used for creating 2D and 3D designs, drawings, and models. It was developed by Autodesk and is widely used in industries such as architecture, engineering, construction, and manufacturing. AutoCAD allows users to create and edit drawings with precision, using a range of tools and features such as layers, dimensions, and blocks. It also supports importing and exporting of various file formats, making it compatible with other design software. As one of the most popular CAD software in the world, AutoCAD is known for its user-friendly interface and powerful capabilities.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img10} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Business Analytics</span>
            <p>Business analytics is the practice of using data, statistical and quantitative analysis, and other analytical tools to gain insights and make informed decisions in business operations and strategy. It involves collecting and analyzing data from various sources, such as sales, customer feedback, and market trends, to identify patterns, trends, and opportunities for optimization and improvement. Business analytics can be used in various areas of business, such as marketing, finance, operations, and supply chain management, to make data-driven decisions that improve efficiency, profitability, and competitiveness.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img11} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>HR</span>
            <p>HR (Human Resources) refers to the department within an organization responsible for managing its employees. The HR function includes various tasks such as recruitment, hiring, training and development, compensation and benefits, and performance management. HR professionals are responsible for ensuring that the organization has a skilled and motivated workforce that is aligned with its goals and objectives. They also manage employee relations, such as conflict resolution and employee engagement, and ensure compliance with labor laws and regulations. The HR function is a critical aspect of any organization, as it plays a vital role in attracting, retaining, and developing talent, which is key to achieving success and growth.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img12} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>IOT</span>
            <p>IoT (Internet of Things) refers to the network of physical devices, vehicles, home appliances, and other objects that are embedded with sensors, software, and connectivity, enabling them to collect and exchange data. These devices can communicate with each other and with humans over the internet, creating a vast network of interconnected devices that can be controlled and monitored remotely. IoT technology has a wide range of applications, including smart homes, healthcare, transportation, and industrial automation. It is transforming the way we interact with the world around us, creating new opportunities for innovation and growth in many industries.</p>
            <a href='#'>Read More</a>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img className='image-resize' src={img13} alt="Blog"/>
          </div>
          <div className="blog-text">
            <span>Stock Market</span>
            <p>The stock market is a platform where publicly traded companies can issue and sell shares of their ownership, or stocks, to investors. Investors can buy and sell these stocks through exchanges such as the New York Stock Exchange (NYSE) and the Nasdaq Stock Market. The price of each stock is determined by supply and demand, as well as the company's financial performance and economic factors. The stock market plays a critical role in the economy, as it allows companies to raise capital and investors to earn returns on their investments. However, it is also subject to fluctuations and risks, such as market volatility, economic downturns, and company failures.</p>
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
