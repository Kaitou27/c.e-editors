import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import './Layout.css';

const Layout = () => (
  <div className="layout">
    <Sidebar />
    <div className="main-content">
      <Header />
      <Dashboard />
    </div>
  </div>
);

export default Layout; 