// src/PlayerStats.js
import React, { useState } from 'react';
import axios from 'axios';

const PlayerStats = () => {
  const [playerStats, setPlayerStats] = useState([]);
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setPlayerStats([]); // Clear previous results

    try {
      console.log(`Searching for players with last name: ${lastName}`);
      const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/players?search=${lastName}`, {
        headers: { 
          'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
        }
      });

      console.log('API Response:', response.data);

      if (response.data.response.length === 0) {
        setError('No players found with the entered last name.');
      } else {
        setPlayerStats(response.data.response);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred while fetching the data.');
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter player's last name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {!loading && playerStats.length > 0 && (
        <div>
          <h1>Player Statistics</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Appearances</th>
                <th>Goals</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              {playerStats.map((player) => (
                <tr key={player.player.id}>
                  <td>{player.player.name}</td>
                  <td>{player.statistics[0].team.name}</td>
                  <td>{player.statistics[0].games.position}</td>
                  <td>{player.statistics[0].games.appearances}</td>
                  <td>{player.statistics[0].goals.total}</td>
                  <td>{player.statistics[0].goals.assists}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
