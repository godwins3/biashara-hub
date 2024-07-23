import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNav from '../Dashboard/LoginNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import serviceImage from '../Assests/Service.png'; // Replace with the actual image path
import './Details.css';

function Details() {
  const navigate = useNavigate();

  const handleBookServiceClick = () => {
    navigate('/book');
  }

  const handleCategoryClick = () => {
    navigate('/categories');
  }

  return (
    
      <div>
        <LoginNav />
        <div className='Details'>
      
      <div>
        <h2>Service Provider Information</h2>
      </div>
      <div className='info1'>
        <div className='column'>
          <img src={serviceImage} alt='Service' className='service-image' />
        </div>
        <div className='column'>
          <h3>Service Provider Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='rating'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='contact-info'>
            <p><FontAwesomeIcon icon={faPhone} /> +123 456 7890</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> email@example.com</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, City, Country</p>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <button className='book-service' onClick={handleBookServiceClick}>Book Service</button>
          </div>
        </div>
      </div>

      <div className='info2'>
        <div className='column ads'>
          <h3>Ads by this Vendor</h3>
          <div className='ad-cards'>
            {[1, 2].map((ad, index) => (
              <div key={index} className='ad-card'>
                <img src={serviceImage} alt='Ad' className='ad-image' />
                <h4>Ad Heading {ad}</h4>
                <p>Ad Subheading</p>
                <button className='book-service' onClick={handleBookServiceClick}>Book Service</button>
              </div>
            ))}
          </div>
        </div>
        <div className='column'>
          <h3>Other Services</h3>
          <ul>
            {['Catering Services', 'Meal Prep and Delivery', 'Cooking Classes and Workshops', 'Private Chef Services', 'Online Ordering and Delivering', 'Pop Up event and food trucks'].map((service, index) => (
              <li key={index} onClick={handleCategoryClick} className='service-item'>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Details;
