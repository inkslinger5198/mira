import React from "react";
import "./Mira.css";
import {
  Sidebar,
  Warning,
  Mirabar,
  Mirai,
} from "./components";

const Mira = () => {
  return (
    <div className="Mira">
      
      
      <div className="mira-body">
        <Sidebar />
        <Mirai />        
      </div>

      
    </div>
  );
};

export default Mira;
