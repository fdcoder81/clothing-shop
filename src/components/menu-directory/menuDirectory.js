import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/MenuItem";

import "./menuDirectory.scss";

const MenuDirectory = ({ sections }) => {
  console.log("SECTIONS", sections);
  return (
    <div className="menu-directory">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  };
};
export default connect(mapStateToProps)(MenuDirectory);
