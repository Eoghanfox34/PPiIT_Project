import React from 'react';
import './PlayerStats.css';
import ManCityLogo from './ManCity.png';
import AstonVillaLogo from './AstonVilla.png';
import ArsenalLogo from './Arsenal.png';

// Data for player statistics
const playerStats = [
    {
        statName: 'Goals',
        leader: {
            statValue: 20,
            playerName: 'Erling Haaland',
            team: 'Manchester City',
            teamLogo: require('./ManCity.png'),
        },
        otherPlayers: [
            { playerName: 'Cole Palmer', team: 'Chelsea', statValue: 20 },
            { playerName: 'Ollie Watkins', team: 'Aston Villa', statValue: 19 },
            { playerName: 'Alexander Isak', team: 'Newcastle', statValue: 17 },
        ],
    },
    {
        statName: 'Assists',
        leader: {
            statValue: 12,
            playerName: 'Ollie Watkins',
            team: 'Aston Villa',
            teamLogo: require('./AstonVilla.png'),
        },
        otherPlayers: [
            { playerName: 'Pascal Groß', team: 'Brighton', statValue: 10 },
            { playerName: 'Kieran Trippier', team: 'Newcastle', statValue: 10 },
            { playerName: 'James Maddison', team: 'Tottenham', statValue: 9 },
        ],
    },
    {
        statName: 'Passes',
        leader: {
            statValue: 2962,
            playerName: 'Rodri',
            team: 'Manchester City',
            teamLogo: require('./ManCity.png'),
        },
        otherPlayers: [
            { playerName: 'Lewis Dunk', team: 'Brighton', statValue: 2886 },
            { playerName: 'William Saliba', team: 'Arsenal', statValue: 2562 },
            { playerName: 'Joelinton', team: 'Newcastle', statValue: 2487 },
        ],
    },
    {
        statName: 'Clean Sheets',
        leader: {
            statValue: 14,
            playerName: 'David Raya',
            team: 'Arsenal',
            teamLogo: require('./Arsenal.png'),
        },
        otherPlayers: [
            { playerName: 'Jordan Pickford', team: 'Everton', statValue: 10 },
            { playerName: 'Bernd Leno', team: 'Fulham', statValue: 9 },
            { playerName: 'Emiliano Martínez', team: 'Aston Villa', statValue: 8 },
        ],
    },
];

// Component to display player statistics
const PlayerStats = () => {
    return (
        <div className="player-stats-container"> {/* Container for all the stats */}
            {playerStats.map((stat, index) => (
                <div key={index} className="player-stat-card"> {/* Card for each stat */}
                    <h2>{stat.statName}</h2> {/* Stat name */}
                    <div className="stat-details"> {/* Container for the details */}
                        <h3>{stat.statValue}</h3> {/* Stat value */}
                        <p><strong>{stat.leader.playerName}</strong></p> {/* Player's name */}
                        <p>{stat.leader.team}</p> {/* Team name */}
                        <img
                            src={stat.leader.teamLogo}
                            alt={`${stat.leader.team} logo`}
                            className={`team-logo ${stat.leader.team === 'Arsenal' || stat.leader.team === 'Aston Villa' ? '' : 'circular-logo'}`} 
                        />
                    </div>
                    {/* Display other leading players */}
                    <div className="other-players">
                        {stat.otherPlayers.map((player, idx) => (
                            <div key={idx} className="other-player-details">
                                <p><strong>{player.playerName}</strong> {/* Player name in bold */}
                                {' - '}
                                {player.team}
                                </p>
                                <span>{player.statValue}</span> {/* Stat value */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayerStats; // Export the component