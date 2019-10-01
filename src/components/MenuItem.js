import React from "react";
import { withRouter } from "react-router-dom";

import "./menuItem.scss";

const MenuItem = ({ title, imgUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
