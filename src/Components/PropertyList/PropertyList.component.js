import React from 'react';
import './PropertyList.styles.css';
import PropertyPreview from '../PropertyPreview/PropertyPreview.component';

const PropertyList = () => {
  return (
    <div className="property-list-container">
      <PropertyPreview />
    </div>
  );
};
export default PropertyList;
