import React from 'react';
import './PropertyList.styles.css';
import PropertyPreview from '../PropertyPreview/PropertyPreview.component';
import DialogForm from '../DialogForm/DialogForm.component';
import LOGO from '../../Assets/LOGO.svg'
import Typography from '@material-ui/core/Typography';

const PropertyList = () => {
  return (
    <div className="property-list-container">
      <img src={LOGO} />
       <Typography variant="h6" style={{
    width: "100%"}}>
            Property List
          </Typography>
      <PropertyPreview address={"1200 Broadway"}/>
      <PropertyPreview address={"240 Bleeker"}/>
      <DialogForm />
    </div>
  );
};
export default PropertyList;
