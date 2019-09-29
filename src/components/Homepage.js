import React from "react";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="menu-container">
        <div className="menu-item">
          <div className="menu-content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
