import React, { useState } from 'react';
import './Mainpage.css';
import fts from "../Assests/featservice.png"
import cal from "../Assests/cal.png"


function Mainpage() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Clicked(true);
      setButton2Clicked(false);
    } else if (buttonNumber === 2) {
      setButton1Clicked(false);
      setButton2Clicked(true);
    }
  };

  return (
    <div className="mainpage">
      <div className="hh">
        <h1>Welcome Grace</h1>
        <p>Manage your service effectively </p>
        <div className="button-container">
          <button
            className={button1Clicked ? 'active' : ''}
            style={{ backgroundColor: button1Clicked ? '#E2725B' : 'transparent', color: button1Clicked ? 'white' : '#E2725B', border: `1px solid #E2725B` }}
            onClick={() => handleButtonClick(1)}
          >
            View Analytics
          </button>
          <button
            className={button2Clicked ? 'active' : ''}
            style={{ backgroundColor: button2Clicked ? '#E2725B' : 'transparent', color: button2Clicked ? 'white' : '#E2725B', border: `1px solid #E2725B` }}
            onClick={() => handleButtonClick(2)}
          >
            Create Service
          </button>
        </div>

        <div className="hhhh">
        {/* Column 1 */}
        <div className="column">
          <p>Featured Services</p>

          <button className="view-all-button">View All Services</button>
        </div>

        {/* Column 2 */}
        <div className="column">
          <img src={fts} alt="Service 1" />
          <p>Service 1 Description</p>
          <p>$50</p>
        </div>

        {/* Column 3 */}
        <div className="column">
          <img src={fts} alt="Service 2" />
          <p>Service 2 Description</p>
          <p>$80</p>
        </div>
      </div>

      <div className='tt'>
{/* Column 1 */}
<div className="column">
          <p>Featured requests</p>

          <button className="view-all-button">View All Requests </button>
        </div>

        {/* Column 2 */}
        <div className="column">
          <img src={cal} alt="Service 1" />
          <p>Service 1 Description</p>
          <p>$50</p>
        </div>

        {/* Column 3 */}
        <div className="column">
          <img src={cal} alt="Service 2" />
          <p>Service 2 Description</p>
          <p>$80</p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Mainpage;
