import React from 'react';
import Navigation from '../../Components/Navigation/Navigation.component';
import PropertyList from '../../Components/PropertyList/PropertyList.component';
import Card from '../../Components/Card/Card.component';
import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="dashboard-container">
        <PropertyList />
        <Card />
      </div>
    </div>
  );
};
export default Dashboard;
