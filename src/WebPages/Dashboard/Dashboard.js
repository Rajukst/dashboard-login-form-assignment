import React from 'react';
import MyChart from './Charts/MyChart';
import MyCalender from './MyCalender/MyCalender';
import photo from "../../Photos/Loginbg1.jpg"
import "./Dashboard.css"

import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ItemAction from './ItemAction/ItemAction';
const Dashboard = () => {
 
  return (
    <Container fluid>
  <Row>
    <Col xs={12} md={2} lg={2}>
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
    </Col>
    <Col xs={12} md={10} lg={10}>
    <Row>
    <Col xs={12} md={4} lg={4}>
    <div className="first-coulmn">
      <div className="body-textItem">
        <p>Community</p>
        <p>Broadcast</p>
        <p>Shift Log</p>
        <p>Lobby Screen</p>
      </div>
    </div>
    </Col>
    <Col xs={12} md={4} lg={4}>
    <div className="heads-div">
      <div className="search-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="input-field">
      
        <input type="text" placeholder="Search" />
      </div>
    </div>
    </Col>
    <Col xs={12} md={4} lg={4}>
    <div className="head-div">
      <h1>this is h1</h1>
    </div>
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={4} lg={4}>
    <div className="second-coulmn mt-3">
      <div className="body-textItems">
        <MyCalender></MyCalender>
      </div>
    </div>
    </Col>
    <Col xs={12} md={4} lg={4}>
    <div className="third-div mt-3">
     <div className="graph-text">
       <div className="left-text">
         <h3>Cases Graph</h3>
       </div>
       <div className="left-text">
         <h6>Today</h6>
       </div>
     </div>
     <MyChart></MyChart>
    </div>
    </Col> 
    <Col xs={12} md={4} lg={4}>
    <div className="second-item mt-3">
     <ItemAction></ItemAction>
    </div>
    </Col>
    </Row>
    </Col>
  </Row>
</Container>
  
  );
};

export default Dashboard;