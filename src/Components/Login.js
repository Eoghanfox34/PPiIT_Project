import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null); // State variable to handle error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error
    try {
      const response = await axios.post('http://localhost:5000/login', { email });
      if (email === 'admin@gmail.com') {
        navigate('/admin');
      } else {
        console.log('User logged in:', response.data);
        navigate('/');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setError('There was an error logging in. Please try again.'); // Set error message
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
        {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Display error message */}
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
