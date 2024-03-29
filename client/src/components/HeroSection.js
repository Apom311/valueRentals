import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Rentals & Sales</h1>
      <p>Your Home, Your Value</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* Second button if necessary */}
        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>See Trailer</Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
