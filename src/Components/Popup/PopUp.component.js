import './popup.styles.scss';
import React from 'react';

const PopUp = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">Add Property to Your Dashboard</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important &ndash; Please read these terms before booking
        </h3>
        <p className="popup__text">porta.</p>
        <a href="#" className="btn btn__green">
          Save
        </a>
      </div>
    </div>
  );
};

export default PopUp;
