import React from 'react';

const Header = ({ label }) => (
  <nav className="header">
    <div className="title">{label}</div>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
);

export default Header;
