import React from 'react';
import Sidebar from '../Sidebar';
import './Dash.css'; // Your CSS file
import Homee from '../main/main';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="charts-container">
        <Homee />
      </div>
    </div>
  );
};

export default Dashboard;
