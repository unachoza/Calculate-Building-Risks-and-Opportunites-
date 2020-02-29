import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import PropertyList from '../PropertyList/PropertyList.component';
import Rating from '../../Components/Rating/Rating.component';
import c1 from '../../img/Circle1.png';
import c2 from '../../img/Circle2.png';
import "./PropertyCard.styles.css"


const PropertyCard = (props) => {
  return (
   <div className="property-card">
    <Typography>
        {props.address}<br></br>
        {props.address2}
    </Typography>
      <div className="rating-containerr">
        <Rating img={c1} />
      </div>
    </div>
  );
};

export default PropertyCard;
