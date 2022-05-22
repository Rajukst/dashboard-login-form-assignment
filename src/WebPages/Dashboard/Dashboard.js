import React from 'react';
import MyChart from './Charts/MyChart';
import MyCalender from './MyCalender/MyCalender';
import photo from "../../Photos/Loginbg1.jpg"
import "./Dashboard.css"
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const Dashboard = () => {
 
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={2} lg={2}>
      <div className="left-container">
        <div className="heading">
          <h1>MYBOS</h1>
        </div>
        <div className="img-container">
          <img className='img-fluid p-2 left-image' src={photo} alt="" />
        </div>
        <div className="left-title">
          <p>Arch</p>
          <p>200 George St, Sydney NSW 2000</p>
        </div>
        <div className="dashboard-links">
          <div className="dashboard">
            <button className="dashboard-button"> <i className="fa-solid fa-gauge-simple-high"></i><Link to="/dashbord">DASHBOARD</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-briefcase"></i><Link to="/case">CASES</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-paper-plane"></i><Link to="/dashbord">WORK ORDER SENT</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-calendar-days"></i><Link to="/dashbord">CALENDER</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-paper-plane"></i><Link to="/dashbord">MAINTENANCE SCHEDULE</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'><i className="fa-solid fa-building-circle-check"></i><Link to="/dashbord">BUILDING</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-user-group"></i><Link to="/dashbord">RESIDENTS</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-key"></i><Link to="/dashbord">KEYS</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-box"></i><Link to="/dashbord">PARCELS</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-file-signature"></i><Link to="/dashbord">CONTRACTORS</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-sliders"></i><Link to="/dashbord">SETTINGS</Link></button>
          </div>
          <div className="dashboard">
            <button className='dashboard-button'> <i className="fa-solid fa-virus-covid"></i><Link to="/dashbord">COVID-19 TRACK</Link></button>
          </div>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} md={10} lg={10}>
    <Grid item xs={12} md={4} lg={4}>
    <h1>dkdkdkdkdk</h1>
  </Grid>
   </Grid>
  </Grid>
  );
};

export default Dashboard;