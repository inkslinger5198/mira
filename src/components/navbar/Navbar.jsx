import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/MIRALOGO.svg";

const Menu = () => (
  <>
    <ScrollLink to="Home" smooth={true} duration={50} offset={-70}>
      <p>Home</p>
    </ScrollLink>
    <ScrollLink to="About" smooth={true} duration={50} offset={-70}>
      <p>About</p>
    </ScrollLink>
    <ScrollLink to="Services" smooth={true} duration={50} offset={-70}>
      <p>Services</p>
    </ScrollLink>
    <ScrollLink to="Articles" smooth={true} duration={50} offset={-70}>
      <p>Articles</p>
    </ScrollLink>
  </>
);

const Phone_menu = ({ setToggleMenu }) => (
  <>
    <ScrollLink to="Home" smooth={true} duration={50} offset={-70} onClick={() => setToggleMenu(false)}>
      <p>Home</p>
    </ScrollLink>
    <ScrollLink to="About" smooth={true} duration={50} offset={-70} onClick={() => setToggleMenu(false)}>
      <p>About</p>
    </ScrollLink>
    <ScrollLink to="Services" smooth={true} duration={50} offset={-70} onClick={() => setToggleMenu(false)}>
      <p>Services</p>
    </ScrollLink>
    <ScrollLink to="Articles" smooth={true} duration={50} offset={-70} onClick={() => setToggleMenu(false)}>
      <p>Articles</p>
    </ScrollLink>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past the hero section
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-phone">
          {toggleMenu ? (
            <RiCloseLine
              className="close-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu2Line
              className="open-icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
          <a href="/" className="navbar-logo-phone">
            <div className="nav-logo">
              <div className="nav-logo-img">
                <img src={Logo} alt="MIRA" height={100} width={100} />
              </div>
            </div>
          </a>
          {toggleMenu && (
            <div className="opacity">
              <div className="navbar-phone-container">
                <div className="navbar-phone-links">
                <Phone_menu setToggleMenu={setToggleMenu} />
                  <div className="nav-buttons-phone">
                    <RouterLink to="/login" className="nav-button login">
                      {" "}
                      Login{" "}
                    </RouterLink>
                    <button className="nav-button signup"> Sign Up </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <a href="/" className="navbar-logo">
          <div className="nav-logo">
            <div className="nav-logo-img">
              <img src={Logo} alt="MIRA" height={100} width={100} />
            </div>
          </div>
        </a>
        <div className="nav-links">
          <div className="navbar-laptop">
            <div className="nav-link">
              <Menu />
            </div>
          </div>
        </div>
        <div className="nav-buttons">
          <RouterLink to="/login" className="nav-button login">
            {" "}
            Login{" "}
          </RouterLink>
          <button className="nav-button signup"> Sign Up </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
