import React from 'react';

import './Rating.styles.css';
import Card from '../Card/Card.component';

const Raiting = (props) => {
  return (
    <div className="raiting-container">
      <div>
        <img src={props.img} className="pIMG"/>
        {/* other wodrd
      <Card /> */}
      </div>
      {/* <div>
        <img src={Circle2} />
        {/* word
        <Card/> */}
      </div> 
     
    // </div>
  );
};
export default Raiting;
