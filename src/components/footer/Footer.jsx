import React from "react";
import "./footer.css";
import logo from "../../assets/MIRALOGO.svg";
import { Link as ScrollLink } from "react-scroll";
import { Route, Link as RouterLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <ScrollLink to="Home" smooth={true} duration={50} offset={-70}>
              <img src={logo} alt="logo" />
            </ScrollLink>
          </div>
        </div>
        <div className="footer-right">
          <div className="contact fal">
            <h3 className="fah">Contact Us</h3>
            <a href="/" className="email fab">Email</a>            
          </div>
          <div className="quick-links fal">
            <h3 className="fah">Quick Links</h3>
            <RouterLink to="/signup" className="fab">Sign Up</RouterLink>
            <RouterLink to="/login" className="fab">Login</RouterLink>
          </div>
          <div className="footer-links fal">
            <h3 className="fah">Navigate</h3>
            <ScrollLink to="Home" smooth={true} duration={50} offset={-70}>
              <p className="fab">Home</p>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={50} offset={-70}>
              <p className="fab">About</p>
            </ScrollLink>
            <ScrollLink to="Services" smooth={true} duration={50} offset={-70}>
              <p className="fab">Services</p>
            </ScrollLink>
            <ScrollLink to="Articles" smooth={true} duration={50} offset={-70}>
              <p className="fab">Articles</p>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <p className="text">© MIRA - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
