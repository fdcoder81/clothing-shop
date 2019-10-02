import React from "react";
import { SHOP_DATA } from "./shopData.js";

import CollectionPreview from "./CollectionPreview";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
