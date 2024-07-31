// src/Components/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login', { email: 'admin@gmail.com' });
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching users!', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>List of Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email} - {user.favoriteTeam}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;


