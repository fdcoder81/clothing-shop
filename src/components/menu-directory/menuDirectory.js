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
        {this.state.shopData.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default MenuDirectory;
