import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  // State variables for form inputs and teams
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const navigate = useNavigate();

  // Fetch the list of teams when the component mounts
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
          headers: {
            'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
          }
        });
        setTeams(response.data.response.map(team => team.team.name));
      } catch (error) {
        console.error('Error fetching teams', error);
      }
    };
    fetchTeams();
  }, []);

  // Update the favorite team input and filter the teams list
  const handleTeamChange = (e) => {
    const value = e.target.value;
    setFavoriteTeam(value);
    setFilteredTeams(
      teams.filter(team => team.toLowerCase().includes(value.toLowerCase()))
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { name, email, favoriteTeam });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="favoriteTeam">Favorite Team</label>
          <input
            type="text"
            id="favoriteTeam"
            className="form-control"
            placeholder="Favorite Team"
            value={favoriteTeam}
            onChange={handleTeamChange}
          />
        </div>
        {/* Display filtered teams as suggestions */}
        {filteredTeams.length > 0 && (
          <ul className="list-group mt-2">
            {filteredTeams.map((team, index) => (
              <li key={index} className="list-group-item" onClick={() => setFavoriteTeam(team)}>
                {team}
              </li>
            ))}
          </ul>
        )}
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Register;



