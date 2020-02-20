import React from 'react';
import Navigation from '../../Components/Navigation/Navigation.component';
import OpenLeftMenu from '../../Components/OpenLeftMenu/OpenLeftMenu.component';
import Circle1 from '../../img/Circle1.png'

const Dashboard = () => {
  return (
    <div>
      <Navigation/>
      <img src={Circle1}/>
      <div>Dashboard</div>
    </div>
  );
};
export default Dashboard;
