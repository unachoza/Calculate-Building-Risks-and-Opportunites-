import React from 'react';
import './PropertyList.styles.css';
import PropertyPreview from '../PropertyPreview/PropertyPreview.component';
import DialogForm from '../DialogForm/DialogForm.component';
import LOGO from '../../Assets/LOGO.svg';
import Typography from '@material-ui/core/Typography';
import PopUp from '../Popup/PopUp.component';

const PropertyList = () => {
  return (
    <div className="property-list-container">
      <img src={LOGO} alt="company logo" />
      <Typography
        variant="h6"
        style={{
          width: '100%',
        }}
      >
        Property List
      </Typography>
      <PropertyPreview address={'1200 Broadway'} />
      <PropertyPreview address={'240 Bleeker'} />
      <DialogForm />
      <a href="#popup" class="btn btn__white">
        Book now!
      </a>
      <PopUp />
    </div>
  );
};
export default PropertyList;
