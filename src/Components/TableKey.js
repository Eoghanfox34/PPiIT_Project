import React from 'react';


// This component provides explanations for the abbreviations used in the league tables
const TableKey = () => {
  return (
    <div className="table-key">
      <h3>Table Key</h3>
      <ul>
          <li><strong>Pos:</strong> Position in the league</li>
          <li><strong>Team:</strong> Team name</li>
          <li><strong>GP:</strong> Games Played</li>
          <li><strong>W:</strong> Wins</li>
          <li><strong>D:</strong> Draws</li>
          <li><strong>L:</strong> Losses</li>
          <li><strong>GF:</strong> Goals For (total goals scored by the team)</li>
          <li><strong>GA:</strong> Goals Against (total goals conceded by the team)</li>
          <li><strong>GD:</strong> Goal Difference (difference between goals scored and goals conceded)</li>
          <li><strong>Pts:</strong> Points (total points earned from wins and draws)</li>
      </ul>
    </div>
  );
};

export default TableKey;
