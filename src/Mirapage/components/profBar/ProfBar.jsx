import React from "react";
import "./ProfBar.css";
import { IoPersonCircle } from "react-icons/io5";

const ProfBar = () => {
  return (
    <div className="profbar">
      <div className="prof">
        <IoPersonCircle className="profbar__icon" /> <p> Child</p>
      </div>
      <div className="prof">
        <IoPersonCircle className="profbar__icon" /> <p> Adult</p>
      </div>
      <div className="prof">
        <IoPersonCircle className="profbar__icon" /> <p> Senior</p>
      </div>
    </div>
  );
};

export default ProfBar;
