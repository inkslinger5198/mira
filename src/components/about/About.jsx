import React from "react";
import "./About.css";

import SVG from "../../assets/about.png";

const About = () => {
  return (
    <div className="About section__padding" id="About">
      <div className="about-heading">
        <p className="heading">About Us</p>
      </div>
      <div className="about-content">
        <div className="abt-content-left">
          <img src={SVG} alt="about" />
        </div>
        <div className="abt-content-right">
          <p className="subheading">
            Meet MIRA, your intelligent voice-powered health assistant designed
            to make healthcare more accessible, personalized, and effortless.
            Whether you need instant health insights, medication reminders, or
            wellness advice, MIRA is here to assist you 24/7.
          </p>
          <p className="subheading">
            <b>What MIRA Does:</b><br/>🩺 Smart Symptom Analysis – Get quick insights based
            on your symptoms. <br/>🔔 Medication & Appointment Reminders – Never miss
            a dose or check-up. <br/>🎙️ Conversational AI – Talk naturally, and MIRA
            understands. <br/>📊 Health Monitoring – Track vital stats and wellness
            trends. <br/>🔒 Secure & Private – Your health data is encrypted and
            safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
