
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const navigate = useNavigate();

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

  const handleTeamChange = (e) => {
    const value = e.target.value;
    setFavoriteTeam(value);
    setFilteredTeams(
      teams.filter(team => team.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { name, email, favoriteTeam });
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Favorite Team"
          value={favoriteTeam}
          onChange={handleTeamChange}
        />
        {filteredTeams.length > 0 && (
          <ul>
            {filteredTeams.map((team, index) => (
              <li key={index} onClick={() => setFavoriteTeam(team)}>
                {team}
              </li>
            ))}
          </ul>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

