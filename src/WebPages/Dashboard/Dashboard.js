import React from 'react';
import MyChart from './Charts/MyChart';
import MyCalender from './MyCalender/MyCalender';

const Dashboard = () => {
 
  return (
    <div>
      <MyCalender></MyCalender>
      <MyChart></MyChart>
    </div>
  );
};

export default Dashboard;