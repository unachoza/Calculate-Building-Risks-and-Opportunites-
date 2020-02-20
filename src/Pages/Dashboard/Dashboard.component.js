import React from 'react';
import Navigation from '../../Components/Navigation/Navigation.component';
import OpenLeftMenu from '../../Components/OpenLeftMenu/OpenLeftMenu.component';
import Circle1 from '../../img/Circle1.png'
import PropertyList from '../../Components/PropertyList/PropertyList.component';
import Card from '../../Components/Card/Card.component';
import Rating from '../../Components/Rating/Rating.component'
import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <Navigation />
      <div className="dashboard-container">
        <PropertyList />
        <Rating />
        <Card />
      </div>
    </div>
  );
};
export default Dashboard;
