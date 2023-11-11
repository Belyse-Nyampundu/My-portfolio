
import React from "react";
import './style.css'
// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="home-page">

      <div className="logo">
        <p>Belyse</p>
      </div>

     <div className="content">
         <a href="" className="nav-link">Home</a>
         <a href="" className="nav-link">About me</a>
         <a href="" className="nav-link">Projects</a>
         <a href="" className="nav-link">Contact me</a>
    </div>
    
    </div>
  );
}

export default Navigation;