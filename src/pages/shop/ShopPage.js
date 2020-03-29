import React from "react";
import SHOP_DATA from "../../components/shopData";
import CollectionPreview from "../../components/collection-Preview/collectionPreview";
import "./shopPage.scss";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
