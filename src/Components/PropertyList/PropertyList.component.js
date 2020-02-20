import React from 'react';
import './PropertyList.styles.css';
import PropertyPreview from '../PropertyPreview/PropertyPreview.component';
import DialogForm from '../DialogForm/DialogForm.component';

const PropertyList = () => {
  return (
    <div className="property-list-container">
      <PropertyPreview />
      <DialogForm />
    </div>
  );
};
export default PropertyList;
