import React from "react";
import "./menuItem.scss";

const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="background-image"
      />
      <div className="menu-content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
