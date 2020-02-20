import React from 'react';
import Circle1 from "../../img/Circle1.png"
import Circle2 from '../../img/Circle2.png'
import "./Rating.styles.css"


const Raiting = () => {
  return (
    <div className="big-raiting-container">
      <div className="raiting-container">
        <img src={Circle1} />
      </div>
      <div className="raiting-container">
        <img src={Circle2} />
      </div>
    </div>
  );
};
export default Raiting;
