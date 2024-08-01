import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setLoggedInUser }) => {
  // State variables to manage email and error messages
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // Handle form submission for logging in
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:5000/login', { email });
      if (email === 'admin@gmail.com') {
        // Redirect admin user to admin panel
        navigate('/admin');
      } else {
        // Set logged-in user state and redirect to home page
        setLoggedInUser(response.data);
        console.log('User logged in:', response.data);
        navigate('/');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setError('There was an error logging in. Please try again.'); 
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Display error message */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;

