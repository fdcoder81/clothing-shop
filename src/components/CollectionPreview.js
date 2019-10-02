import React from "react";
import "./collectionPreview.scss";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
