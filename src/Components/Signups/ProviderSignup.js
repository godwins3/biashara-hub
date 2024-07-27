import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProviderSignup.css';
import logo from '../Assests/Logo.png';
import leftImage from '../Assests/login.jpg';


function ProviderSignup() {
  const [email, setEmail] = useState('');
  const [username, setUserName ] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [genericError, setGenericError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Reset any previous error messages
    setEmailError('');
    setPasswordError('');
    setGenericError('');

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    try {
      // Make HTTP POST request to the login API endpoint
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Parse response
      const data = await response.json();

      // Handle successful login
      if (response.ok) {
        // Redirect the user to the dashboard or home page upon successful login
        navigate('/dashboard');
      } else {
        // Handle login failure
        // For now, display error message received from the server
        setGenericError(data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error occurred during login:', error);
      // Display a generic error message to the user
      setGenericError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="provider-signup-container">
      <div className="left-section">
        <img src={leftImage} alt="LeftImage" className="left-image" />
      </div>
      <div className="right-section">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h2 className="signup-heading">Biashara Hub</h2>
        <form className="signup-form" onSubmit={onButtonClick}>
          <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={username}
              placeholder="John Doe"
              onChange={(ev) => setUserName(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="johndoe@email.com"
              onChange={(ev) => setEmail(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <div className="form-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(ev) => setPassword(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{passwordError}</label>
            <span onClick={togglePasswordVisibility} className="togglePassword">
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
          <div className="terms-text">
            <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
          {genericError && <label className="errorLabel">{genericError}</label>}
          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default ProviderSignup