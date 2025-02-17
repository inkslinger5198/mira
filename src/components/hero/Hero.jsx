import React from "react";
import Navbar from "../navbar/Navbar";
import MIRABOT from "../../assets/HEROVECTOR.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero section__padding" id="Home">
      <div className="hero_content">
        <div className="heading">Medical Insight & Recovery Assistant</div>
        <div className="subheading">
         Receive guided
          exercises, instant reminders, and alerts based on your wellness
          goals—keeping you on track without missing a beat.{" "}
        </div>
        <div className="cta">Chat about symptoms</div>
      </div>
      <div className="hero_image">
        <img src={MIRABOT} className="hero_img" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
