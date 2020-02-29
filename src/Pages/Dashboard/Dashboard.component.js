import React from 'react';
import Navigation from '../../Components/Navigation/Navigation.component';
import OpenLeftMenu from '../../Components/OpenLeftMenu/OpenLeftMenu.component';
import Circle1 from '../../img/Circle1.png';
import PropertyList from '../../Components/PropertyList/PropertyList.component';
import Card from '../../Components/Card/Card.component';
import Rating from '../../Components/Rating/Rating.component';
import c1 from '../../img/Circle1.png';
import c2 from '../../img/Circle2.png';
import PropertyCard from '../../Components/PropertyCard/PropertyCard.component';
import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="dashboard-container">
        <PropertyList />
        <div className="rating-containerr">
          <PropertyCard address={'1200 Broadway'} address2={' New York, NY 11234'}  />
          <PropertyCard address={'240 Bleeker'}address2={' New York, NY 11234'} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
