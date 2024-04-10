import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeagueTables = () => {
  const [standings, setStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2021', league: '39'}, // Example parameters
      headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    const fetchLeagueTables = async () => {
      try {
        const response = await axios.request(options);
        setStandings(response.data.response[0].league.standings[0]); // Adjust according to actual response structure
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching league standings:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchLeagueTables();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data. Please try again later.</div>;

  return (
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
          {standings.map((team, index) => (
            <tr key={index}>
              <td>{team.rank}</td>
              <td>{team.team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTables;