import React from 'react';
import Carousel from './Carousel.tsx';

function Banner() {
    return (
      <div className="banner" style={{ backgroundImage: "url(./banner2.jpg)" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="tagline text-center">
                <h1 className="text-white mb-3 mt-4 display-4" style={{ fontWeight: "800" }}>Concert Crafter</h1>
                <p className="text-white" style={{ fontWeight: "100" }}>Streamlined music event discovery and planning</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="carousel">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;
  