
import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Serene <strong>MINDS</strong></h1>
        <p className="dashboard-date">Monday, 7 September 2024</p>
      </header>
   
      <div className="dashboard-grid">
        <div className="dashboard-box"></div>
        <div className="dashboard-box"></div>
        <div className="dashboard-box"></div>
        <div className="dashboard-box"></div>
        <div className="dashboard-box large-box"></div>
        <div className="dashboard-box med-box"></div>
        <div className="dashboard-box large-box"></div>
        <div className="dashboard-box med-box"></div>
        
      </div>
    </div>
  );
};

export default Dashboard;
