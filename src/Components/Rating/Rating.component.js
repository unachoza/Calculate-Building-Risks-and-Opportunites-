import React from 'react';

import './Rating.styles.css';
import Card from '../Card/Card.component';

const Raiting = props => {
  const warningText="1 Fine Approaching - 4/14/21"
  return (
    <div className="raiting-container">
      <div className="not-div">
        <img src={props.img} className="pIMG" alt="data display" />
        <Card warningText={warningText}/>
      </div>
    </div>
  );
};
export default Raiting;
