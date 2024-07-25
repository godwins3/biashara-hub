import React from 'react';
import './UseProf.css';
import LoginNav from '../Dashboard/LoginNav';
import profile from "../Assests/prof.png";

function Userprof() {
  const username = localStorage.getItem('username')
  return (
    <div>
      <LoginNav />
      <div className="prof-cont">
        <div className="left-column">
          <img src={profile} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>{username}</h2>
            <p>Update and manage your account</p>
          </div>
          <div className="profile-actions">
            <p>Edit Profile</p>
            <p>Change Password</p>
            <p>Change Availability Status</p>
            <p>Change Location</p>
            <p>Billing</p>
            <p>Help</p>
            <p>Delete Account</p>
          </div>
        </div>
        {/* <div className="right-column">
          <label>Add Description</label>
          <textarea placeholder="Description" rows="5"></textarea>
          <input type="file" />
          <label>Add Skills or Additional Information</label>
          <input type="text" placeholder="Add Skills or Additional Information" />
          
        </div> */}
      </div>
    </div>
  );
}

export default Userprof;
