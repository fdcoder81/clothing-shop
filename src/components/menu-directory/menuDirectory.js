import React from "react";

import { SHOP_DATA } from "../shopData";
import MenuItem from "../menu-item/MenuItem";

import "./menuDirectory.scss";

class MenuDirectory extends React.Component {
  state = {
    shopData: SHOP_DATA
  };

  render() {
    return (
      <div className="menu-directory">
        {this.state.shopData.map(({ title, imgUrl, id, size, linkUrl }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imgUrl={imgUrl}
              size={size}
              linkUrl={linkUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuDirectory;
