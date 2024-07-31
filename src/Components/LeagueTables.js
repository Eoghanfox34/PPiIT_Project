
import React, { useState } from 'react';
import axios from 'axios';

const LeagueTables = () => {
  const [standings, setStandings] = useState([]);
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`, {
        headers: { 
          'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
        }
      });

      if (response.data.response.length === 0) {
        setError('No leagues found for the entered country.');
      } else {
        const leagueId = response.data.response[0].league.id;
        const standingsResponse = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=2023`, {
          headers: { 
            'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
          }
        });
        
        setStandings(standingsResponse.data.response[0].league.standings[0]);
      }
    } catch (err) {
      setError('An error occurred while fetching the data.');
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {!loading && standings.length > 0 && (
        <div>
          <h1>League Standings</h1>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.team.id}>
                  <td>{team.rank}</td>
                  <td>{team.team.name}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeagueTables;
