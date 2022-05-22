
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './WebPages/Login/Login';
import Dashboard from './WebPages/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
