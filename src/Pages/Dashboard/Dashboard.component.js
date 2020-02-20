import React from 'react';
import Navigation from '../../Components/Navigation/Navigation.component';
import OpenLeftMenu from '../../Components/OpenLeftMenu/OpenLeftMenu.component';
import Circle1 from '../../img/Circle1.png'
import PropertyList from '../../Components/PropertyList/PropertyList.component';
import Card from '../../Components/Card/Card.component';
import Rating from '../../Components/Rating/Rating.component'
import './Dashboard.styles.css';
import c1 from "../../img/Circle1.png"
import c2 from "../../img/Circle2.png"

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <Navigation />
      <div className="dashboard-container">
     <PropertyList />
     <div className="rating-containerr">
      <Rating img={c1} />
       <Rating img={c2}/>
     </div>
      </div>
    </div>
  );
};
export default Dashboard;
