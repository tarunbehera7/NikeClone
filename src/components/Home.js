import React from 'react';
import "../styles/Home.css";
import videoFile from '../assets/video/vid.mp4';

const Home = () => {
  return (
    <>
      <main className="home">
        <section className="video-section">
          <div className="video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              onError={(e) => console.error('Video loading error:', e)}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <h2>Experience the Future of Sport</h2>
              <p>Innovative designs and cutting-edge technology.</p>
            </div>
          </div>
        </section>
        <section className="products">
          <h2>New Arrivals</h2>
          <div className="product-grid1">
            <div className="product-card1">
              <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a9db44d-ee3b-42ab-88ea-2c48d37bc9ba/AIR+ZOOM+PEGASUS+41+FP.png" alt="Nike Pegasus 41 Blueprint"/>
              <h3>Nike Pegasus 41 Blueprint</h3>
            </div>
            <div className="product-card1">
              <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7293b867-7202-4161-83db-76474e93a240/G.T.+HUSTLE+3+FP+EP.png" alt="Nike G.T. Hustle 3 Blueprint EP"/>
              <h3>Nike G.T. Hustle 3 Blueprint EP</h3>
            </div>
            <div className="product-card1">
              <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c859cc5-133a-4c22-ad15-02dbb826f28e/W+AIR+ZOOM+ALPHAFLY+NEXT%25+3+FP.png" alt="Nike Alphafly 3 Blueprint"/>
              <h3>Nike Alphafly 3 Blueprint</h3>
            </div>
          </div>
        </section>
        <section className="gear-up">
          <h2>Gear Up</h2>
          <a href="/gearup" className="gear-up-button">Explore Now</a>
        </section>
      </main>
    </>
  );
}

export default Home;