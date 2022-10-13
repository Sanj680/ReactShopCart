import React from "react";
import landing from "../images/landing.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <div className="home" style={{ backgroundImage: `url(${landing})` }}>
  
      <div className="headerContainer">
      <h1 style={{color:'white'}}>
        <div>
        </div>BUY FARM FRESH FRUITS & VEGETABLES
        <div>AT BEST PRICES</div> </h1>
        <Link to="/Login">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}