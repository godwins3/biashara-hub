import React from 'react';
import {  FaPaintBrush, FaUser, FaUniversalAccess } from 'react-icons/fa';
import './SideNav.css';

function SideNav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <FaUniversalAccess className="icon" />
          <a href="/services">Services</a>
        </li>
        <li>
          <FaPaintBrush className="icon" />
          <a href="/hairstyles">Hairstyles</a>
        </li>
        <li>
          <FaUser className="icon" />
          <a href="/artisans">Artisans</a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
