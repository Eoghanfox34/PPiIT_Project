import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LeagueTables() {
  const [standings, setStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/standings', {
          params: { season: '2021', league: '39' }, // Example: Premier League for the 2021 season
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_FOOTBALL_KEY, 
            'X-RapidAPI-Host': process.env.REACT_APP_API_FOOTBALL_HOST, 
          },
        });

        setStandings(response.data.response[0].league.standings[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching league standings:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (isLoading) return <div>Loading league standings...</div>;
  if (error) return <div>Error loading data. Please try again later.</div>;

  return (
    <div className="container mt-4">
      <h1>Premier League Standings - 2021</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team, index) => (
            <tr key={index}>
              <td>{team.rank}</td>
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
  );
}

export default LeagueTables;

