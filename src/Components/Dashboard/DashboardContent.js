import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './DashboardContent.css';

function DashboardContent() {
  return (
    <div className="dashboard-container">
      <div className="left-column">
        <h3>In The Last 30 Days</h3>
        <div className="cards">
          <div className="card">200 Active Users</div>
          <div className="card">130 Active Service Providers</div>
          <div className="card">100 Service Seekers</div>
        </div>
        <h2>All Providers</h2>
        <div className="search-filter">
          <input type="text" placeholder="Search Providers" />
          <button><FaFilter /></button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Status</th>
              <th>Ratings</th>
              <th>Services Offered</th>
            </tr>
          </thead>
          <tbody>
            {/* Populate with data */}
            <tr>
              <td>Provider 1</td>
              <td>Verified</td>
              <td>4.5</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="right-column">
        <div className="most-used">
          <h4>Most Used Providers</h4>
          <div className="card-u">
            <ul>
              <li>Provider A: 10 Requests, 8 Customers</li>
              <li>Provider B: 8 Requests, 5 Customers</li>
            </ul>
            <button>View All Providers</button>
          </div>
        </div>
        <div className="frequently-used">
          <h3>Frequently Used Services</h3>
          <div className="card-u">
            <ul>
              <li>Service A: Weekly</li>
              <li>Service B: Monthly</li>
            </ul>
            <button>View Services </button>
          </div>
        </div>
        <div className="timestamp">
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
