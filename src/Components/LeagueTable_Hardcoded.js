// HardcodedLeagueTables.js
import React from 'react';
import TableKey from './TableKey'; // Import the TableKey component

// Import league logos from the source folder
import premierLeagueLogo from './Prem.jpg'; 
import laLigaLogo from './LaLiga.png';
import serieALogo from './SerieA.jpg';

// A component to display hardcoded league standings for Premier League, La Liga, and Serie A (Due to API deployment issues)
const LeagueTable_Hardcoded = () => {
    // An array containing objects for each league. Each league object includes the league's name and an array of team objects.
    const leagues = [
        {
            name: "Premier League",
            logo: premierLeagueLogo,
            teams: [
                { position: 1, name: "Arsenal", GP: 31, points: 71, wins: 22, draws: 5, losses: 4, goalsFor: 75, goalsAgainst: 24, goalDifference: "+51" },
                { position: 2, name: "Liverpool", GP: 31, points: 71, wins: 21, draws: 8, losses: 2, goalsFor: 72, goalsAgainst: 30, goalDifference: "+42" },
                { position: 3, name: "Man City", GP: 31, points: 70, wins: 21, draws: 7, losses: 3, goalsFor: 71, goalsAgainst: 31, goalDifference: "+40" },
                { position: 4, name: "Tottenham", GP: 31, points: 60, wins: 18, draws: 6, losses: 7, goalsFor: 65, goalsAgainst: 45, goalDifference: "+20" },
                { position: 5, name: "Aston Villa", GP: 32, points: 60, wins: 18, draws: 6, losses: 8, goalsFor: 66, goalsAgainst: 49, goalDifference: "+17" },
                { position: 6, name: "Man United", GP: 31, points: 49, wins: 15, draws: 4, losses: 12, goalsFor: 45, goalsAgainst: 46, goalDifference: "-1" },
                { position: 7, name: "West Ham", GP: 32, points: 48, wins: 13, draws: 9, losses: 10, goalsFor: 52, goalsAgainst: 56, goalDifference: "-4" },
                { position: 8, name: "Newcastle", GP: 31, points: 47, wins: 14, draws: 5, losses: 12, goalsFor: 65, goalsAgainst: 52, goalDifference: "+13" },
                { position: 9, name: "Chelsea", GP: 30, points: 44, wins: 12, draws: 8, losses: 10, goalsFor: 55, goalsAgainst: 52, goalDifference: "+3" },
                { position: 10, name: "Brighton", GP: 31, points: 43, wins: 11, draws: 10, losses: 10, goalsFor: 51, goalsAgainst: 49, goalDifference: "+2" },
                { position: 11, name: "Wolves", GP: 31, points: 42, wins: 12, draws: 6, losses: 13, goalsFor: 44, goalsAgainst: 49, goalDifference: "-5" },
                { position: 12, name: "Bournemouth", GP: 31, points: 41, wins: 11, draws: 8, losses: 12, goalsFor: 45, goalsAgainst: 55, goalDifference: "-10" },
                { position: 13, name: "Fulham", GP: 32, points: 39, wins: 11, draws: 6, losses: 15, goalsFor: 47, goalsAgainst: 51, goalDifference: "-4" },
                { position: 14, name: "Crystal Palace", GP: 31, points: 30, wins: 7, draws: 9, losses: 15, goalsFor: 36, goalsAgainst: 54, goalDifference: "-18" },
                { position: 15, name: "Brentford", GP: 32, points: 29, wins: 7, draws: 8, losses: 17, goalsFor: 45, goalsAgainst: 58, goalDifference: "-13" },
                { position: 16, name: "Everton", GP: 31, points: 27, wins: 9, draws: 8, losses: 14, goalsFor: 32, goalsAgainst: 42, goalDifference: "-10" },
                { position: 17, name: "Nottm Forest", GP: 32, points: 25, wins: 7, draws: 8, losses: 17, goalsFor: 40, goalsAgainst: 56, goalDifference: "-16" },
                { position: 18, name: "Luton Town", GP: 32, points: 19, wins: 6, draws: 7, losses: 19, goalsFor: 45, goalsAgainst: 65, goalDifference: "-20" },
                { position: 19, name: "Burnley", GP: 32, points: 19, wins: 4, draws: 7, losses: 21, goalsFor: 32, goalsAgainst: 67, goalDifference: "-35" },
                { position: 20, name: "Sheffield United", GP: 31, points: 16, wins: 3, draws: 7, losses: 21, goalsFor: 30, goalsAgainst: 82, goalDifference: "-52" },
              ],
              
        },
        {
            name: "La Liga",
            logo: laLigaLogo,
            teams: [
                { position: 1, name: "Real Madrid", GP: 30, wins: 23, draws: 6, losses: 1, goalsFor: 66, goalsAgainst: 20, goalDifference: "+46", points: 75 },
                { position: 2, name: "Barcelona", GP: 30, wins: 20, draws: 7, losses: 3, goalsFor: 61, goalsAgainst: 34, goalDifference: "+27", points: 67 },
                { position: 3, name: "Girona", GP: 30, wins: 20, draws: 5, losses: 5, goalsFor: 62, goalsAgainst: 36, goalDifference: "+26", points: 65 },
                { position: 4, name: "Atlético Madrid", GP: 30, wins: 18, draws: 4, losses: 8, goalsFor: 56, goalsAgainst: 35, goalDifference: "+21", points: 58 },
                { position: 5, name: "Athletic Club", GP: 30, wins: 16, draws: 8, losses: 6, goalsFor: 50, goalsAgainst: 28, goalDifference: "+22", points: 56 },
                { position: 6, name: "Real Sociedad", GP: 30, wins: 13, draws: 10, losses: 7, goalsFor: 43, goalsAgainst: 32, goalDifference: "+11", points: 49 },
                { position: 7, name: "Valencia", GP: 30, wins: 12, draws: 8, losses: 10, goalsFor: 33, goalsAgainst: 32, goalDifference: "+1", points: 44 },
                { position: 8, name: "Real Betis", GP: 30, wins: 10, draws: 12, losses: 8, goalsFor: 36, goalsAgainst: 36, goalDifference: "0", points: 42 },
                { position: 9, name: "Osasuna", GP: 30, wins: 11, draws: 6, losses: 13, goalsFor: 37, goalsAgainst: 44, goalDifference: "-7", points: 31 },
                { position: 10, name: "Villarreal", GP: 30, wins: 10, draws: 10, losses: 10, goalsFor: 48, goalsAgainst: 53, goalDifference: "-5", points: 38 },
                { position: 11, name: "Getafe", GP: 30, wins: 9, draws: 11, losses: 10, goalsFor: 37, goalsAgainst: 43, goalDifference: "-6", points: 38 },
                { position: 12, name: "Las Palmas", GP: 30, wins: 9, draws: 11, losses: 10, goalsFor: 34, goalsAgainst: 41, goalDifference: "-7", points: 37 },
                { position: 13, name: "Alavés", GP: 30, wins: 8, draws: 8, losses: 14, goalsFor: 26, goalsAgainst: 36, goalDifference: "-10", points: 32 },
                { position: 14, name: "Sevilla", GP: 30, wins: 10, draws: 7, losses: 13, goalsFor: 29, goalsAgainst: 33, goalDifference: "-4", points: 31 },
                { position: 15, name: "Mallorca", GP: 30, wins: 6, draws: 13, losses: 11, goalsFor: 25, goalsAgainst: 35, goalDifference: "-10", points: 31 },
                { position: 16, name: "Rayo Vallecano", GP: 30, wins: 6, draws: 12, losses: 12, goalsFor: 25, goalsAgainst: 38, goalDifference: "-13", points: 30 },
                { position: 17, name: "Celta Vigo", GP: 30, wins: 6, draws: 10, losses: 14, goalsFor: 32, goalsAgainst: 44, goalDifference: "-12", points: 27 },
                { position: 18, name: "Cádiz", GP: 30, wins: 6, draws: 4, losses: 20, goalsFor: 25, goalsAgainst: 45, goalDifference: "-20", points: 25 },
                { position: 19, name: "Granada", GP: 30, wins: 2, draws: 8, losses: 20, goalsFor: 28, goalsAgainst: 60, goalDifference: "-32", points: 14 },
                { position: 20, name: "Almería", GP: 30, wins: 2, draws: 9, losses: 19, goalsFor: 30, goalsAgainst: 61, goalDifference: "-31", points: 15 },
            ],
        },
        {
            name: "Serie A",
            logo: serieALogo,
            teams: [
                { position: 1, name: "Inter Milan", GP: 30, wins: 25, draws: 4, losses: 1, goalsFor: 73, goalsAgainst: 14, goalDifference: "+59", points: 79 },
                { position: 2, name: "AC Milan", GP: 31, wins: 21, draws: 5, losses: 5, goalsFor: 60, goalsAgainst: 34, goalDifference: "+26", points: 68 },
                { position: 3, name: "Juventus", GP: 31, wins: 18, draws: 8, losses: 5, goalsFor: 45, goalsAgainst: 24, goalDifference: "+21", points: 62 },
                { position: 4, name: "Bologna", GP: 31, wins: 16, draws: 10, losses: 5, goalsFor: 45, goalsAgainst: 25, goalDifference: "+20", points: 58 },
                { position: 5, name: "Roma", GP: 31, wins: 16, draws: 7, losses: 8, goalsFor: 56, goalsAgainst: 35, goalDifference: "+21", points: 55 },
                { position: 6, name: "Atalanta", GP: 30, wins: 15, draws: 5, losses: 10, goalsFor: 48, goalsAgainst: 38, goalDifference: "+10", points: 50 },
                { position: 7, name: "Napoli", GP: 31, wins: 14, draws: 4, losses: 13, goalsFor: 37, goalsAgainst: 34, goalDifference: "+3", points: 46 },
                { position: 8, name: "Lazio", GP: 31, wins: 14, draws: 4, losses: 13, goalsFor: 37, goalsAgainst: 34, goalDifference: "+3", points: 46 },
                { position: 9, name: "Torino", GP: 31, wins: 13, draws: 9, losses: 11, goalsFor: 31, goalsAgainst: 29, goalDifference: "+2", points: 44 },
                { position: 10, name: "Fiorentina", GP: 30, wins: 12, draws: 7, losses: 11, goalsFor: 35, goalsAgainst: 35, goalDifference: "0", points: 43 },
                { position: 11, name: "Monza", GP: 31, wins: 11, draws: 11, losses: 9, goalsFor: 41, goalsAgainst: 34, goalDifference: "-7", points: 42 },
                { position: 12, name: "Genoa", GP: 31, wins: 11, draws: 11, losses: 9, goalsFor: 34, goalsAgainst: 38, goalDifference: "-4", points: 38 },
                { position: 13, name: "Cagliari", GP: 31, wins: 11, draws: 11, losses: 9, goalsFor: 34, goalsAgainst: 38, goalDifference: "-4", points: 38 },
                { position: 14, name: "Lecce", GP: 31, wins: 6, draws: 11, losses: 14, goalsFor: 26, goalsAgainst: 48, goalDifference: "-22", points: 29 },
                { position: 15, name: "Udinese", GP: 31, wins: 6, draws: 13, losses: 12, goalsFor: 25, goalsAgainst: 43, goalDifference: "-18", points: 31 },
                { position: 16, name: "Empoli", GP: 31, wins: 6, draws: 11, losses: 14, goalsFor: 26, goalsAgainst: 48, goalDifference: "-22", points: 29 },
                { position: 17, name: "Frosinone", GP: 31, wins: 6, draws: 7, losses: 18, goalsFor: 36, goalsAgainst: 59, goalDifference: "-23", points: 25 },
                { position: 18, name: "Sassuolo", GP: 31, wins: 6, draws: 8, losses: 17, goalsFor: 25, goalsAgainst: 47, goalDifference: "-23", points: 25 },
                { position: 19, name: "Salernitana", GP: 31, wins: 6, draws: 8, losses: 17, goalsFor: 25, goalsAgainst: 64, goalDifference: "-39", points: 15 },


            ],
        },

    ];


    const tableStyle = {
        width: '100%', // Ensure table occupies the full width
        borderCollapse: 'separate', // Ensure borders are separate to avoid overlapping
        borderSpacing: '10px', // Space between table cells
        marginBottom: '20px', // Space between tables
    };

    const containerStyle = {
        marginBottom: '40px', // Gap between each league table
    };

    // Render the component to display the standings for each league
    return (
        <div>
            {leagues.map((league, index) => (
                <div key={index}>
                    {/* Display the league logo */}
                    <img src={league.logo} alt={`${league.name} Logo`} style={{ width: '100px', height: '100px' }} />
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {league.teams.map((team, idx) => (
                                <tr key={idx}>
                                    <td>{team.position}</td>
                                    <td>{team.name}</td>
                                    <td>{team.GP}</td>
                                    <td>{team.wins}</td>
                                    <td>{team.draws}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.goalsFor}</td>
                                    <td>{team.goalsAgainst}</td>
                                    <td>{team.goalDifference}</td>
                                    <td>{team.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
            <TableKey/> 
        </div>
    );
};



export default LeagueTable_Hardcoded;
