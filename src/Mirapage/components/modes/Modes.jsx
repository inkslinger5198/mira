import React from "react";
import "./modes.css";

const Modes = () => {
  return (
    <div className="Modes">
      <div className="Modes_container">
        <button className="mode">Medical</button>
        <button className="mode">Ayurvedic</button>
        <button className="mode">Yoga</button>
      </div>
    </div>
  );
};

export default Modes;
