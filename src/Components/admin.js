import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  // State variable to manage the list of users
  const [users, setUsers] = useState([]);

  // Fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users from the server
        const response = await axios.post('http://localhost:5000/login', { email: 'admin@gmail.com' });
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching users!', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDelete = async (userId) => {
    try {
      // Delete user from the server
      await axios.delete(`http://localhost:5000/users/${userId}`);
      // Update the list of users
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('There was an error deleting the user!', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      <h2>List of Users:</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Favorite Team</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.favoriteTeam}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;




