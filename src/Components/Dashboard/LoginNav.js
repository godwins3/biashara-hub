import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faSearch, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import './LoginNav.css';
import logo from "../Assests/Logo.png";

function LoginNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="navbar">
      <div className="left-section">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Jiachilie Logo" className="logo-image" />
        </div>
      </Link>
        <input type="text" placeholder="What do you need help with?" className="search-input" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="right-section">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-text">3</span>
        </div>
        <div className="user-profile" ref={dropdownRef}>
          <span className="user-greeting" onClick={handleProfileClick}>Hi Nancy</span>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="/dashboard">My Dashboard</a>
              <a href="/categories">Categories</a>
              <a href="/profile">Settings</a>
              <a href="/help">Help</a>
              <a href="/login">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginNav;