import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeagueTables = () => {
  // State variables to manage the league standings, country, season, loading status, and error messages
  const [standings, setStandings] = useState([]);
  const [country, setCountry] = useState('');
  const [season, setSeason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission for searching league standings
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setStandings([]); // Clear previous results

    try {
      // Fetch leagues based on the entered country
      const leagueResponse = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`, {
        headers: { 
          'x-rapidapi-key': '968b920960msh0c2d7de4acb78c3p1c89f4jsn68f17e62e232' 
        }
      });

      if (leagueResponse.data.response.length === 0) {
        setError('No leagues found for the entered country.');
      } else {
        const leagueId = leagueResponse.data.response[0].league.id;

        // Fetch standings for the identified league and season
        const standingsResponse = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${season}`, {
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

      {!loading && standings.length > 0 && (
        <div>
          <h1>League Standings</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Team</th>
                <th scope="col">Played</th>
                <th scope="col">Won</th>
                <th scope="col">Drawn</th>
                <th scope="col">Lost</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr key={team.team.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{team.team.name}</td>
                  <td>{team.all.played}</td>
                  <td>{team.all.win}</td>
                  <td>{team.all.draw}</td>
                  <td>{team.all.lose}</td>
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

