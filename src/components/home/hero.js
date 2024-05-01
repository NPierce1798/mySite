import { Link } from "react-router-dom";

import Typed from "typed.js";
import React from "react";

import DecText from "./dec-text";

function Hero() {

  

    return (
    <div className="hero__background">
      <div className="hero__container">
        <div className="hero__container-overlay">
    
            <h4 className="hero__heading">Software Engineering Done Right.</h4>
            <DecText />
            <Link to="https://www.linkedin.com/in/nicolas-pierce/" target="_blank" className="hero__contact">Contact</Link>
    
        </div>
      </div>
    </div>
    );
  }
  
  export default Hero;