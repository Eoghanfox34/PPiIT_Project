// HardcodedLeagueTables.js
import React from 'react';

// A component to display hardcoded league standings for Premier League, La Liga, and Serie A
const LeagueTable_Hardcoded = () => {
    // An array containing objects for each league. Each league object includes the league's name and an array of team objects.
    const leagues = [
        {
            name: "Premier League",
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
            teams: [
                { position: 1, name: "Real Madrid", points: 86, wins: 26, draws: 8, losses: 4, goalsFor: 80, goalsAgainst: 31, goalDifference: "+49" },
                { position: 2, name: "Barcelona", points: 82, wins: 25, draws: 7, losses: 6, goalsFor: 85, goalsAgainst: 38, goalDifference: "+47" },
                // Continue adding all teams for the league
            ],
        },
        {
            name: "Serie A",
            teams: [
                { position: 1, name: "Inter Milan", points: 84, wins: 25, draws: 9, losses: 4, goalsFor: 84, goalsAgainst: 32, goalDifference: "+52" },
                { position: 2, name: "AC Milan", points: 83, wins: 26, draws: 5, losses: 7, goalsFor: 74, goalsAgainst: 31, goalDifference: "+43" },
                // Continue adding all teams for the league
            ],
        },
        // Optionally, add more leagues and their standings
    ];

    // Render the component to display the standings for each league
    return (
        <div>
            {leagues.map((league, index) => (
                <div key={index}>
                    <h2>{league.name}</h2>
                    <table>
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
        </div>
    );
};

export default LeagueTable_Hardcoded;
