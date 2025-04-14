import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      setErrorMessage('Email and password are required');
      return;
    }

    try {
      console.log("Sending request to backend...");
      // Send POST request to the backend API
      //const response = await axios.post('http://node-api:3000/login', {
      //const response = await axios.post('http://localhost:3000/login', {   
      const response = await axios.post('http://35.171.22.26:3000/login', {   
      //const response = await axios.post('/login', {
        email,
        password,
        });

      // Handle successful login response
      if (response.status === 200) {
        alert('Login successful!');
        setErrorMessage('verified!!');
        navigate('/home');
        // Redirect to another page or store the user token as needed
      }
    } catch (error) {
      // Handle errors from the backend
      setErrorMessage('Invalid credentials. Please try again.');
      console.log(error); // Log any backend errors for debugging
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
