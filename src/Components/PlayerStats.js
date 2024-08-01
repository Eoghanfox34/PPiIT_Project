import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerStats = () => {
  // State variables to manage top scorers, country, season, loading status, and error messages
  const [topScorers, setTopScorers] = useState([]);
  const [country, setCountry] = useState('');
  const [season, setSeason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission for searching top scorers
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setTopScorers([]); // Clear previous results

    try {
      console.log(`Searching for leagues in country: ${country}`);
      const leagueResponse = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`, {
        headers: { 
          'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
        }
      });

      console.log('League API Response:', leagueResponse.data);

      if (leagueResponse.data.response.length === 0) {
        setError('No leagues found for the entered country.');
      } else {
        const leagueId = leagueResponse.data.response[0].league.id;

        console.log(`Fetching top scorers for league: ${leagueId} in season: ${season}`);
        const scorersResponse = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueId}&season=${season}`, {
          headers: { 
            'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
          }
        });

        console.log('Scorers API Response:', scorersResponse.data);

        if (scorersResponse.data.response.length === 0) {
          setError('No top scorers found for the entered league and season.');
        } else {
          setTopScorers(scorersResponse.data.response);
        }
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred while fetching the data.');
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="season">Season</label>
          <input
            type="text"
            id="season"
            className="form-control"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            placeholder="Enter season (e.g., 2023)"
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {!loading && topScorers.length > 0 && (
        <div>
          <h1>Top Scorers</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Goals</th>
              </tr>
            </thead>
            <tbody>
              {topScorers.map((player) => (
                <tr key={player.player.id}>
                  <td>{player.player.name}</td>
                  <td>{player.statistics[0].team.name}</td>
                  <td>{player.statistics[0].goals.total}</td>
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



