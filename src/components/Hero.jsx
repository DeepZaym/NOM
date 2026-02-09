import React from "react";
import nomFull from "../img/nom full.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src={nomFull}
          alt="NADIPO ORIGINAL MALS"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
