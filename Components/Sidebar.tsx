import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">Logo</div>
    <nav className="sidebar-nav">
      <a href="#" className="sidebar-link">Dashboard</a>
      <a href="#" className="sidebar-link">Profile</a>
      <a href="#" className="sidebar-link">Settings</a>
      <a href="#" className="sidebar-link">Logout</a>
    </nav>
  </aside>
);

export default Sidebar; 