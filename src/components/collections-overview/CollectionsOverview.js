import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-Preview/collectionPreview";

import "./collectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collections: state.shop.collections
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
