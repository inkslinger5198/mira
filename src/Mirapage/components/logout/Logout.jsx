import React from 'react';
import "./logout.css";
import { IoPersonCircle } from "react-icons/io5";

const Logout = () => {
  return (
    <div className="logout">
        <div className="logout_btn">
            <button className="nav-button signup">Logout</button>
        </div>
        <div className="logout_icon">
            <IoPersonCircle className="logout_icon" />
        </div>
    </div>
  )
}

export default Logout