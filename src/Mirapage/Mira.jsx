import React from "react";
import "./Mira.css";
import {Hero, Sidebar, ProfBar, Warning, Modes, Logout, Mirabar, Mirai } from "./components";

const Mira = () => {
  return (
    <div className="Mira">
      <Hero />
      <Mirabar />
      <Sidebar />
      <Mirai />
      {/* <Greeting /> */}
      {/* <ProfBar /> */}
      <Warning />
    </div>
  );
};

export default Mira;
