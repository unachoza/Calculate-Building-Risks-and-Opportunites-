import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, ...props }) => {
  return (
    <div className="btn" {...props}>
      {children}
    </div>
  );
};

export default CustomButton;
