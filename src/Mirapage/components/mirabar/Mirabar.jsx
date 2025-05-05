import React, { useState } from "react";
import "./mirabar.css";
import { IoPersonCircle } from "react-icons/io5";
import { useUserMode } from "../../../context/userModeContext.jsx";
import { Link as RouterLink } from "react-router-dom";

const Mirabar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const { setMode } = useUserMode(); // Get setter from context

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const [activeChatMode, setActiveChatMode] = useState("Medical"); // Default to Medical

  return (
    <div className="mirabar-container">
      <div className="mirabar">
        <div className="empty"></div>

        {/* Desktop Modes */}
        <div className="mirabar-chatmodes">
          <div className="mirabar-chatmodes-title">
            <p>CHAT MODE</p>
          </div>
          <div className="mirabar-modes">
            {["Medical", "Ayurvedic", "Home Remedies"].map((mode) => (
              <button
                key={mode}
                className={`miramode ${
                  activeChatMode === mode ? "active-mode" : ""
                }`}
                onClick={() => setActiveChatMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div className="mirabar-logout">
          <div className="mira-logbutton-lap">
            <RouterLink to="/" className="nav-button signup">
              Logout
            </RouterLink>
          </div>
          <div className="mira-prof" onClick={toggleMenu}>
            <IoPersonCircle className="mirabar-profile" />
          </div>

          {menuOpen && (
            <div className="mirabar-tab">
              <div className="mira-name">
                <p className="">InkSlinger</p>
              </div>

              {/* Mobile/Phone view - Modes inside dropdown */}
              <div className="mirabar-phone">
                <p className="head">Chat Mode</p>
                <button className="miramode" onClick={handleMenuItemClick}>
                  Medical
                </button>
                <button className="miramode" onClick={handleMenuItemClick}>
                  Ayurvedic
                </button>
                <button className="miramode" onClick={handleMenuItemClick}>
                  Home Remedy
                </button>
              </div>

              <div className="mira-user">
                <p className="head">User Mode</p>
                <button
                  className="miramode"
                  onClick={() => {
                    handleModeChange("child");
                    handleMenuItemClick();
                  }}
                >
                  Child
                </button>
                <button
                  className="miramode"
                  onClick={() => {
                    handleModeChange("adult");
                    handleMenuItemClick();
                  }}
                >
                  Adult
                </button>
                <button
                  className="miramode"
                  onClick={() => {
                    handleModeChange("senior");
                    handleMenuItemClick();
                  }}
                >
                  Senior
                </button>
              </div>
              {/* Logout button in dropdown */}
              <div className="mira-logbutton">
                <RouterLink
                  to="/"
                  className="nav-button signup"
                  onClick={handleMenuItemClick}
                >
                  Logout
                </RouterLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mirabar;
